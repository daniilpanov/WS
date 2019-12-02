$.prototype.disable = (function ()
{
    $.each(this, (function (index, el)
    {
        var elem = $(el);
        if (!elem.prop("disabled"))
            elem.prop("disabled", true);
    }));
});

$.prototype.enable = (function ()
{
    $.each(this, (function (index, el)
    {
        var elem = $(el);
        if (elem.prop("disabled"))
            elem.prop("disabled", false);
    }));
});

$.prototype.pseudoHide = (function ()
{
    $.each(this, (function (index, el)
    {
        var elem = $(el);

        if (!elem.width())
            elem.width(100);

        elem.css({
            "position": "absolute",
            "left": elem.outerWidth() * (-2)
        });
    }));
});


function randomNumber(min, max)
{
    return Math.random() * (max - min) + min;
}

function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}