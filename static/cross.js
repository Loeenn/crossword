

const horizontalQuestions = [
    { id: "h1", text: "Участок водного пути, соединяющий транзитный ход с акваторией порта." },
    { id: "h2", text: "Часть территории порта, где размещены здания управления и стоянки автомобилей." },
    { id: "h3", text: "Часть  порта для стоянки судов под грузовыми операциями." },
    { id: "h4", text: "Тип перевозок, использующих несколько видов транспорта." },
    { id: "h5", text: "Название графиков, обеспечивающих согласованность движения разных транспортных средств." },
    { id: "h6", text: "Тип порта, где перегружаются разные виды грузов." },
    { id: "h7", text: "Термин, обозначающий передаточный пункт между видами транспорта, например, порт или станция." },
    { id: "h8", text: "Основной параметр, используемый для расчёта габаритов причала." }


];
const verticalQuestions = [
    { id: "v1", text: "Акватория чего используется  для стоянки судов под грузовыми операциями." },
    { id: "v2", text: "Вид графика для координации работы мультимодальных систем." },
    { id: "v3", text: "Одна из ключевых функций порта, связанная с пассажирами." },
    { id: "v4", text: "Регламентное время для проведения операций в порту." },
    { id: "v5", text: "Процесс, включающий погрузку и разгрузку грузов в порту." },
    { id: "v6", text: "Плавательное средство, предназначенное для перевозки грузов и пассажиров по воде" }
];

const questionNumbers = [

		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,  null,   null,   null,  null,   null,  2,  null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   1, null,  null,   null,  null,  null,   null,   null,  null,   2,     null,   null,     null,  null,   null,     null,   null,     null,   null,     null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,  null,   null,   null,   null,  null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,  null,   null,   null,   null,  null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,  null,   null,    null,   null, null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,  null,   null,   null,   null,  null,   null,   null,  null,   3,   null,    null,   null,   null,   null,    null,  null,   null,   null,   null],
		                                [4,   null,  null,	null,null,null, null,   null,   null,  null,  null,  null,  null, null, null,   null,   null,  null,   null,   null,    null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null, null,   null,  5,  null,   null,   null,    null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   5,  null,     null,  null,  3,  null,  null,  null,null,    null, null, null,   null,     null,    null,    null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,  null,  null,   null,   null,  null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   6,  4, null,   null,     null,    null,   6,    null,   null,    null,   null,   null,     null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   7,   null,   null,  null,  null,   null,   null,  null, null,     null,   null,   null,    null,  null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,  null,   null,   null,   null,   8,   null,   null,     null,  null,     null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,  null,   null,   null,   null,   null,    null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,  null,   null,   null,   null,   null,    null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
		                                [null,  null,	null,	null,	null,	null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,  null,   null,   null,   null,   null,  null,   null,   null,   null,   null,   null,   null]];

const createCrossword = () => {
    const table = document.getElementById("crossword");

    crosswordData.forEach((row, i) => {
        const tr = document.createElement("tr");
        row.forEach((cell, j) => {
            const td = document.createElement("td");

            if (cell) {
                td.classList.add("filled");

                // Добавляем номер вопроса, если он есть
                const questionNumber = questionNumbers[i][j];
                if (questionNumber) {
                    const span = document.createElement("span");
                    span.textContent = questionNumber;
                    span.classList.add("question-number");
                    td.appendChild(span);
                }

                const input = document.createElement("input");
                input.setAttribute("maxlength", 1);
                input.dataset.row = i;
                input.dataset.col = j;
                input.addEventListener("focus", () => highlightQuestion(i, j));
                input.addEventListener("blur", removeHighlight);
                input.addEventListener("keydown", handleArrowNavigation);
                td.appendChild(input);
            } else {
                td.classList.add("empty");
            }
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
};


const addQuestions = () => {
    const horizontalList = document.getElementById("horizontal-questions");
    const verticalList = document.getElementById("vertical-questions");

    horizontalQuestions.forEach(question => {
        const li = document.createElement("li");
        li.id = question.id;
        li.textContent = question.text;
        horizontalList.appendChild(li);
    });

    verticalQuestions.forEach(question => {
        const li = document.createElement("li");
        li.id = question.id;
        li.textContent = question.text;
        verticalList.appendChild(li);
    });
};

const highlightQuestion = (row, col) => {
    document.querySelectorAll("li").forEach(li => li.classList.remove("highlight"));
    if (row === 2) document.getElementById("h1").classList.add("highlight");
    if (row === 1) document.getElementById("h2").classList.add("highlight");
    if (col === 2) document.getElementById("v1").classList.add("highlight");
    if (col === 3) document.getElementById("v2").classList.add("highlight");
};

const removeHighlight = () => {
    document.querySelectorAll("li").forEach(li => li.classList.remove("highlight"));
};

const checkCrossword = async () => {
    let isCorrect = true;

    crosswordData.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell) {
                const input = document.querySelector(
                    `input[data-row='${i}'][data-col='${j}']`
                );
                if (input) {
                    if (input.value.toUpperCase() === answers[i][j]) {
                        input.classList.remove("incorrect");
                        input.classList.add("correct");
                    } else {
                        input.classList.remove("correct");
                        input.classList.add("incorrect");
                        isCorrect = false;
                    }
                }
            }
        });
    });

    if (isCorrect) {
        alert("Поздравляем! Кроссворд решён правильно!");

        const username = document.getElementById("username").value.trim();
        if (username === "") {
            alert("Введите имя перед сохранением результата!");
            return;
        }

        const score = 100;
        try {
            const response = await fetch('/submit/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, score })
            });

            if (response.ok) {
                alert("Результат сохранён!");
            } else {
                alert("Ошибка при сохранении результата.");
            }
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            alert("Не удалось связаться с сервером.");
        }
    } else {
        alert("Некоторые ответы неверны. Попробуйте ещё раз.");
    }
};



const handleArrowNavigation = (event) => {
    const currentInput = event.target;
    const row = parseInt(currentInput.dataset.row, 10);
    const col = parseInt(currentInput.dataset.col, 10);

    let nextRow = row;
    let nextCol = col;

    if (event.key === "ArrowUp") nextRow = Math.max(row - 1, 0);
    if (event.key === "ArrowDown") nextRow = Math.min(row + 1, crosswordData.length - 1);
    if (event.key === "ArrowLeft") nextCol = Math.max(col - 1, 0);
    if (event.key === "ArrowRight") nextCol = Math.min(col + 1, crosswordData[0].length - 1);

    const nextInput = document.querySelector(
        `input[data-row='${nextRow}'][data-col='${nextCol}']`
    );
    if (nextInput) nextInput.focus();
};

document.addEventListener("DOMContentLoaded", () => {
    createCrossword();
    addQuestions();
    document.getElementById("check-button").addEventListener("click", checkCrossword);
});

        document.getElementById("leaderboard-button").addEventListener("click", () => {
            window.open("/leaderboard/", "_blank");
        });
