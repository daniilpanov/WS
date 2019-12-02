<?php
if (!$_POST)
    die(1);

//
extract($_POST);

/** @var $score int */
/** @var $time int */
/** @var $nick string */

//
$PDO = new PDO("mysql:host=localhost;dbname=test;charset=utf8", "php", "12345");

//
$patterns = $_POST;
//
$sql = "INSERT INTO res (nick, score, time) VALUE (:nick, :score, :time)";
//
$PDO->prepare($sql)->execute($patterns);
?>
<!--  -->
<div id="res-nickname"><?=$nick?></div>
<div id="res-score"><?=$score?></div>
<div id="res-time"><?=$time?></div>
<!--  -->
<div id="res-control">
    <button id="exit">Меню</button>
    <button id="repeat">Играть ещё</button>
</div>

<script>
    let res = $("#game-res");
    $("#exit").click(function ()
    {
        res.html("");
        res.hide();
        stopDisplay();
        menu();
    });
    $("#repeat").click(function ()
    {
        res.html("");
        res.hide();
        game("<?=$nick?>");
    });
</script>
