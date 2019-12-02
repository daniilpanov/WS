// Переменные игры (как свойства класса (которого нет))
let nick = ""; // Ник игрока
let time = 0; // Время игры
let timer; // ID таймера
let hp = 100; // HP игрока
let score = 0; // Счёт игрока
let pause = false; // Пауза

// Инициализация: установка слушателей
function init()
{
    let game = $("body");
    game.focus();
    game.blur(() => game.focus());

    game.keydown(function (e)
    {
        switch (e.keyCode)
        {
            case 37:
                spriteToLeft("timon");
                break;

            case 39:
                spriteToRight("timon");
                break;
        }
    });

    game.keyup(function (e)
    {
        switch (e.keyCode)
        {
            case 27:
                if (pause)
                    gameResume();
                else
                    gamePause();
                break;

            case 37:
                spriteStop("timon");
                break;

            case 39:
                spriteStop("timon");
                break;

            case 38:
                spriteJump("timon");
                break;
        }
    });

    $("#game-back").click(gameBack);

    $("#timer").text("00:00");
    $("#score").text("0");
    $("#hp").text("100HP");

    //
    canvasInit();
}
// Удаление слушателей (не знаю, есть ли слово "Деинициализация" ;-D)
function remove()
{
    $("body").unbind("blur keydown keyup");
    $("#game-back").unbind("click");

    nick = "";
    time = 0;
    timer = undefined;
    hp = 100;
    score = 0;
    pause = false;
}

// Ник
function nickname(nickname)
{
    nick = nickname;
}

// Игра
function display()
{
    alert("Ваш ник: " + nick);
    $("#game").show();
}

function stopDisplay()
{
    $("#game").hide();
}

// Таймер
function startTimer()
{
    timer = setInterval(function ()
    {
        // TIME
        time++;
        let sec = (time % 60).toString();
        let min = ((time - sec) / 60).toString();

        if (sec.length < 2)
            sec = "0" + sec;
        if (min.length < 2)
            min = "0" + min;

        $("#timer").text(min + ":" + sec);

        // HP
        hp--;

        $("#hp").text(hp.toString() + "HP");

        if (hp <= 0)
            gameLose(score, time, nick);
    }, 1000);
}

function stopTimer()
{
    clearInterval(timer);
    spriteStop("timon");
}

// Игровое меню
function displayGameMenu()
{
    pause = true;
    $("#game-menu").show();
}

function removeGameMenu()
{
    pause = false;
    $("#game-menu").hide();
}
