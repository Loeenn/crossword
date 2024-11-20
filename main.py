from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import sqlite3
import webbrowser
import uvicorn
app = FastAPI()

# Подключение статических файлов и шаблонов
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Определение модели данных
class Submission(BaseModel):
    username: str
    score: int

# Создание базы данных SQLite
conn = sqlite3.connect("leaderboard.db", check_same_thread=False)
cursor = conn.cursor()
cursor.execute("""
    CREATE TABLE IF NOT EXISTS leaderboard (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        score INTEGER NOT NULL
    )
""")
conn.commit()

@app.get("/", response_class=HTMLResponse)
async def read_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/submit/")
async def submit_result(data: Submission):
    username = data.username
    score = data.score

    # Сохранение в базу данных
    cursor.execute("INSERT INTO leaderboard (username, score) VALUES (?, ?)", (username, score))
    conn.commit()

    return {"message": "Result saved successfully"}

@app.get("/leaderboard/", response_class=HTMLResponse)
async def view_leaderboard(request: Request):
    cursor.execute("SELECT username, score FROM leaderboard ORDER BY score DESC LIMIT 10")
    leaderboard = cursor.fetchall()

    return templates.TemplateResponse("leaderboard.html", {"request": request, "leaderboard": leaderboard})

def open_browser():
    webbrowser.open("http://127.0.0.1:8000")

# Запуск приложения
if __name__ == "__main__":
    import threading
    threading.Timer(1, open_browser).start()
    uvicorn.run(app, host="127.0.0.1", port=8000)