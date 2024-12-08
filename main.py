from fastapi import FastAPI, Request, Form, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import sqlite3
import webbrowser
import uvicorn
from typing import List, Union
app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

class Submission(BaseModel):
    username: str
    score: int

class CrosswordRequest(BaseModel):
    name: str
    crossword: List[List[str]] 
    nums: List[List[Union[int, None]]]

conn = sqlite3.connect("leaderboard.db", check_same_thread=False)
cursor = conn.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS leaderboard (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        score INTEGER NOT NULL
    )
""")
cursor.execute("""
    CREATE TABLE IF NOT EXISTS crosswords (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        data TEXT NOT NULL,
        nums TEXT NOT NULL
    )
""")
conn.commit()

from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse


@app.get("/api/crossword")
async def get_latest_crossword():
    cursor.execute("SELECT name, data,nums FROM crosswords ORDER BY id DESC LIMIT 1")
    crossword = cursor.fetchone()

    if crossword:
        crossword_data = eval(crossword[1]) 
        nums = eval(crossword[2])

        # Формируем JSON-ответ
        return JSONResponse(content={"crossword": crossword_data, "nums": nums})
    else:
        raise HTTPException(status_code=404, detail="Кроссворд не найден")


@app.get("/", response_class=HTMLResponse)
async def read_index(request: Request):
    cursor.execute("SELECT name, data,nums FROM crosswords ORDER BY id DESC LIMIT 1")
    crossword = cursor.fetchone()
    if crossword:
        return templates.TemplateResponse("index.html", {"request": request, "name": crossword[0], "data": crossword[1],"nums": crossword[2]})
    else:
        return templates.TemplateResponse("index.html", {"request": request})

@app.get("/create_crossword/", response_class=HTMLResponse)
async def create_crossword_page(request: Request):
    return templates.TemplateResponse("2.html", {"request": request})

@app.post("/submit/")
async def submit_result(data: Submission):
    username = data.username
    score = data.score

    cursor.execute("INSERT INTO leaderboard (username, score) VALUES (?, ?)", (username, score))
    conn.commit()

    return {"message": "Результат успешно сохранён"}

@app.get("/leaderboard/", response_class=HTMLResponse)
async def view_leaderboard(request: Request):
    cursor.execute("SELECT username, score FROM leaderboard ORDER BY score DESC LIMIT 10")
    leaderboard = cursor.fetchall()

    return templates.TemplateResponse("leaderboard.html", {"request": request, "leaderboard": leaderboard})

@app.get("/crosswords/", response_class=HTMLResponse)
async def view_crosswords(request: Request):
    cursor.execute("SELECT id, name FROM crosswords ORDER BY id DESC")
    crosswords = cursor.fetchall()

    return templates.TemplateResponse("crosswords.html", {"request": request, "crosswords": crosswords})

@app.get("/crossword/{crossword_id}", response_class=HTMLResponse)
async def view_crossword(request: Request, crossword_id: int):
    cursor.execute("SELECT name, data FROM crosswords WHERE id = ?", (crossword_id,))
    crossword = cursor.fetchone()

    if crossword:
        return templates.TemplateResponse("cross.html", {"request": request, "name": crossword[0], "data": crossword[1]})
    else:
        raise HTTPException(status_code=404, detail="Кроссворд не найден")

@app.post("/save_crossword/")
async def save_crossword(crossword_request: CrosswordRequest):
    name = crossword_request.name
    crossword_data = str(crossword_request.crossword)
    nums = str(crossword_request.nums)
    
    try:
        cursor.execute("INSERT INTO crosswords (name, data, nums) VALUES (?, ?, ?)", 
                       (name, crossword_data, nums))
        conn.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка базы данных: {str(e)}")

    return {"message": "Кроссворд успешнно сохранён"}

def open_browser():
    webbrowser.open("http://127.0.0.1:8000")

if __name__ == "__main__":
    import threading
    threading.Timer(1, open_browser).start()
    uvicorn.run(app, host="127.0.0.1", port=8000)
