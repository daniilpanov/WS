<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Game</title>
    <link rel="stylesheet" href="style.css">
    <!-- Подключаем необходимые js -->
    <script rel="script" type="text/javascript" src="js/jquery.js"></script>
    <script rel="script" type="text/javascript" src="js/add.js"></script>
    <script rel="script" type="text/javascript" src="js/controller.js"></script>
    <script rel="script" type="text/javascript" src="js/components/game.js"></script>
    <script rel="script" type="text/javascript" src="js/components/menu.js"></script>
    <script rel="script" type="text/javascript" src="js/components/main.js"></script>
    <script rel="script" type="text/javascript" src="js/components/game-play.js"></script>
</head>
<body>
<!--
 -- Из трёх блоков, представленных ниже, только один может быть виден.
 -- Переключение между блоками происходит за счёт обработки js событий нажатия на кнопки
 -- Почти как Actions в Java для Android :-)
-->
<!-- МЕНЮ: содержит поле для ввода тега игрока, кнопку "Начать" и кнопку позака инструкции к игре -->
<nav id="menu" hidden>
    <div id="front">
        <label>Тег игрока:&emsp;<input type="text" id="name"></label>
        <!-- Примечание: кнопка становится активной только тогда, когда поле для ввода тега не пустое -->
        <button id="play">Начать!</button>
    </div>
    <div id="another">
        <button id="instruction">Инструкция к игре</button>
    </div>
</nav>
<!--
 -- ИГРА: содержит блок с информацией об игре - счёт, HP, время игры
 -- и элемент canvas, на котором будет происходить визуализация игрового процесса
-->
<div id="game" hidden>
    <!-- Информация об игре -->
    <div id="game-tools">
        <span id="hp">100HP</span>
        <span id="score">0</span>
        <span id="timer">00:00</span>
    </div>

    <canvas id="game-viewer"></canvas>

    <div id="game-menu" hidden>
        <button id="game-back">Вернуться в меню</button>
    </div>

    <div id="game-res" hidden></div>
</div>
<!-- Блок с инструкцией -->
<div id="instruction-viewer" hidden>
    Инструкция
</div>
</body>
</html>