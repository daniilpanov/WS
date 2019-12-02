function Game()
{
    if (!new.target)
        return new Game();

    this.start = (function (nick)
    {
        init();
        nickname(nick);
        display();
        startTimer();
        removeGameMenu();
        clip();
    });
    this.stop = (function (display = false)
    {
        stopTimer();
        remove();
        if (!display) stopDisplay();
    });
    this.pause = (function ()
    {
        stopTimer();
        displayGameMenu();
    });
    this.resume = (function ()
    {
        removeGameMenu();
        startTimer();
    });
    this.die = (function ()
    {
        alert("Вы проиграли!");
    });
}

function Menu()
{
    if (!new.target)
        return new Menu();

    this.hide = (function ()
    {
        menuDelete();
        $("#menu").hide();
    });

    this.show = (function ()
    {
        menuInit();
        $("#menu").show();
    });
}

function Instruction()
{
    if (!new.target)
        return new Instruction();

    this.show = (function ()
    {
        //
        $("#instruction-viewer").show();
        //
        let body = $("body");
        setTimeout("body.focus()", 0);
        //
        body.blur(() => body.focus());
        //
        body.keydown(function (e)
        {
            if (e.keyCode == 27)
                instructionBack();
        });

    });
    this.hide = (function ()
    {
        //
        $("#instruction-viewer").hide();
        //
        $("body").unbind("blur keydown");
    });
}