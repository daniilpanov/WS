function menuInit()
{
    let nick_input = $("#name"),
        play_button = $("#play"),
        instr_button = $("#instruction");

    if (!nick_input.val())
        play_button.disable();
    else
        play_button.enable();

    nick_input.bind("change keyup blur", function ()
    {
        if (!nick_input.val())
            play_button.disable();
        else
            play_button.enable();
    });

    play_button.click(function ()
    {
        game(nick_input.val());
    });

    instr_button.click(function ()
    {
        instruction();
    });
}

function menuDelete()
{
    $("#play").unbind("click");
    $("#name").unbind("change keyup blur");
    $("#instruction").unbind("click");
}