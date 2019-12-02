// App controllers - контроллеры
let menu_controller = Menu();
let game_controller = Game();
let instruction_controller = Instruction();

$(document).ready(function ()
{
    menu();
});

function game(nick)
{
    game_controller.start(nick);
    menuBack();
}

function gamePause()
{
    game_controller.pause();
}

function gameResume()
{
    game_controller.resume();
}

function gameBack()
{
    game_controller.stop();
    menu();
}

function gameLose(sc, t, n)
{
    game_controller.die();
    game_controller.stop(true);
    //
    $.ajax({
        url: "results.php",
        type: "post",
        data: {score: sc, time: t, nick: n},
        success: (function (html)
        {
            let res = $("#game-res");
            res.html(html);
            res.show();
        }),
        error: (function ()
        {
            alert("Error!");
        })
    });
}

function instruction()
{
    menuBack();
    instruction_controller.show();
}

function instructionBack()
{
    instruction_controller.hide();
    menu();
}

function menu()
{
    menu_controller.show();
}

function menuBack()
{
    menu_controller.hide();
}
