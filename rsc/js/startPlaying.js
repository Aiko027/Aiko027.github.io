var alertSound = false;
function alertaSonido() 
{
    if(alertSound==false)
    {
        alert
        (
        "Al iniciar un juego, el volumen puede estar muy alto, ten cuidado si usas audífonos!"
        );
        alertSound= true;
    }
}

function cargarJuego(juego) 
{
    var iframeGame  = document.getElementById("gameiFrame");
    switch (juego) 
    { 
        case "Celeste": 
        {
            iframeGame.src =
                "https://www.lexaloffle.com/bbs/widget.php?pid=15133";
            break;
        }
        case "Celeste 2": 
        {
            iframeGame.src =
                "https://www.lexaloffle.com/bbs/widget.php?pid=celeste_classic_2";
            break;
        } 
        case "Pico Dino":
        {
            iframeGame.src=
                "https://www.lexaloffle.com/bbs/widget.php?pid=picodino";
            break;
        }
        case "Poom":
        {
            iframeGame.src=
                "https://www.lexaloffle.com/bbs/widget.php?pid=poom_0";
            break;
        }
        case "Space Station Demo":
        {
            iframeGame.src=
                "https://www.lexaloffle.com/bbs/widget.php?pid=space_station_demo";
            break;
        }
        case "Pigments":
        {
            iframeGame.src=
                "https://www.lexaloffle.com/bbs/widget.php?pid=pigments";
            break;
        }
        case "Plantas vs Zombies":
        {
            iframeGame.src=
                "https://www.lexaloffle.com/bbs/widget.php?pid=fsgupicozombiegarden121";
            break;
        }
        case "Buns: Bunny Survivor":
        {
            iframeGame.src=
                "https://www.lexaloffle.com/bbs/widget.php?pid=bunnysurvivor";
            break;
        }
        case "Tetys":
        {
            iframeGame.src=
                "https://www.lexaloffle.com/bbs/widget.php?pid=spaz48_tetyis";
            break;
        }
    }
    alertaSonido();
}