let canvas_context;
let canvas;

function canvasInit()
{
    canvas = $("#game-viewer");
    canvas_context = document.getElementById("game-viewer").getContext("2d");
    canvas.prop("width", window.outerWidth - 50);
    canvas.prop("height", window.outerHeight - 130);
    //
    hero[1] = window.outerHeight - 230;
}

//
function getSprite(name, size)
{
    let img =
        (typeof size != "undefined")
            ? new Image(size[0], size[1])
            : new Image();

    img.src = "images/" + name;

    return img;
}
//
function getTimonLeft(item)
{
    return getSprite("timon/left/" + item + ".png", [55, 75]);
}
//
function getTimonRight(item)
{
    return getSprite("timon/right/" + item + ".png", [55, 75]);
}
//
function getHyenaLeft(item)
{
    return getSprite("hyena/left/" + item + ".png", [100, 75]);
}
//
function getHyenaRight(item)
{
    return getSprite("hyena/right/" + item + ".png", [100, 75]);
}
//
function getSome(end, item, func)
{
    let items = [];

    for (let i = 1; i <= end; i++)
    {
        items[i - 1] = func(item + i.toString());
    }

    return items;
}

//
let bg = getSome(5, "bg", (function (item)
{
    return getSprite("bg/" + item + ".png");
}));
//
let timon = {
    //
    left: {
        run: getSome(5, "going", getTimonLeft), //
        stance: getTimonLeft("stance"), //
        jump: getSome(7, "jump", getTimonLeft), //
        die: getSome(4, "die", getTimonLeft) //
    },
    //
    right: {
        run: getSome(5, "going", getTimonRight),
        stance: getTimonRight("stance"),
        jump: getSome(7, "jump", getTimonRight),
        die: getSome(4, "die", getTimonRight)
    }
};
//
let hyena = {
    left: {
        run: getSome(5, "going", getHyenaLeft),
        stance: getHyenaLeft("stance"),
        die: getSome(4, "die", getHyenaLeft)
    },
    right: {
        run: getSome(5, "going", getHyenaRight),
        stance: getHyenaRight("stance"),
        die: getSome(4, "die", getHyenaRight)
    }
};
//
let caterpillars = getSome(4, "c-type", function (item)
{
    return getSprite("caterpillars/" + item + ".png", [60, 50]);
});

//
let hero = [20, 0, "right", undefined, timon.right.stance];
//
let hyenas = [];
//
let caterpillars_pos_n_types = [];

//
function generateHyena()
{
    let x = randomInt(canvas.prop("width"), canvas.prop("height"));
    hyenas.push([x, window.outerHeight - 230, "right", undefined, hyena.right.stance]);
}

//
function carousel(sprites, interval, func)
{
    let i = 0;
    let main_func;

    main_func = (function ()
    {
        if (func(sprites[i++], i) === false)
        {
            spriteStop("timon");
            return;
        }

        if (i >= sprites.length)
            i = 0;

        hero[3] = setTimeout(main_func, interval);
    });

    main_func();
}

//
function spriteToLeft(sprite)
{
    if (typeof hero[3] == "undefined")
    {
        hero[2] = "left";
        carousel(timon.left.run, 100, function (spr)
        {
            hero[0] -= 5;
            hero[4] = spr;
            clip();
        });
    }
}
//
function spriteStop(sprite)
{
    clearTimeout(hero[3]);
    hero[3] = undefined;

    if (hero[2] == "right")
    {
        hero[4] = timon.right.stance;
        clip();
    }
    else if (hero[2] == "left")
    {
        hero[4] = timon.left.stance;
        clip();
    }
}
//
function spriteToRight(sprite)
{
    if (typeof hero[3] == "undefined")
    {
        hero[2] = "right";
        carousel(timon.right.run, 100, function (spr)
        {
            hero[0] += 5;
            hero[4] = spr;
            clip();
        });
    }
}
//
function spriteJump(sprite)
{
    if (typeof hero[3] == "undefined")
    {
        let imgs;

        if (hero[2] == "right")
            imgs = timon.right.jump;
        else if (hero[2] == "left")
            imgs = timon.left.jump;

        carousel(imgs, 100, function (spr, i)
        {
            if (i > 4)
            {
                hero[1] += 8;
                hero[0] += (hero[2] == "right" ? 5 : -5);
            }
            else
            {
                hero[1] -= 8;
                hero[0] += (hero[2] == "right" ? 5 : -5);
            }
            hero[4] = spr;
            clip();

            if (i >= 7)
            {
                hero[1] += 8;
                return false;
            }
        });
    }
}
//
function checkTimonCollision()
{

}

function showImage(img, pos)
{
    canvas_context.drawImage(img, pos[0], pos[1], img.width, img.height);
}

function clear()
{
    canvas_context.clearRect(0, 0, canvas.width(), canvas.height());
}


function clip()
{
    clear();
    showImage(bg[0], [0, 0]);
    showImage(hero[4], [hero[0], hero[1]]);

    for (let i = 0; i < hyenas.length; i++)
    {
        console.log(hyenas[i]);
        showImage(hyenas[i][4], [hyenas[i][0], hyenas[i][1]]);
    }
}