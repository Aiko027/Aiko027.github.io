var player = document.getElementById("player");
var idActualSong =0;

function chngBackground(idToChange)
{
    idToChange.style.backgroundColor ="#7E2553";
    idToChange.style.fontSize ="30px";
    idToChange.style.color="white";
}

function returnBackground(idToChange)
{
    idToChange.style.backgroundColor ="#000000";
    idToChange.style.fontSize ="25px";
}

function showNowPlayingString()
{
    var nowPlayingParagraph = document.getElementById("nowPlayingP");
    var nowPlayingString = document.getElementById("nowPlayingString");
    if(player.paused)
    {
        nowPlayingParagraph.hidden=true;
        nowPlayingString.hidden=true;
    }
    else
    {
        nowPlayingParagraph.hidden=false;
        nowPlayingString.hidden=false;
    }
}
showNowPlayingString();

function updatePlayer()
{
    var path="rsc/msc/";
    if(idActualSong<0)
    {
        idActualSong=6;
    }
    path+=idActualSong+".mp3";
    if(idActualSong>6||idActualSong==0)
    {
        idActualSong=0;
        path="rsc/msc/"+idActualSong+".wav";
    }
    if(player.paused)
    {

        player.src=path;
        player.pause();
    }
    else
    {
        player.src=path;
        player.play();
    }
    var nowPlayingString = document.getElementById("nowPlayingString");
    switch(idActualSong)
    {
        case 0:
        {
            nowPlayingString.innerText= "lani's trek - lena raine - celeste 2 ost";
            break;
        }
        case 1:
        {
            nowPlayingString.innerText= "welcome to animal crossing - gruber99 - pico 8 cover";
                break;
        }
        case 2:
        {
            nowPlayingString.innerText= "first steps - gruber99 - pico 8 cover";
                break;
        }
        case 3:
        {
            nowPlayingString.innerText= "confronting myselft - gruber99 - pico 8 cover";
                break;
        }
        case 4:
        {
            nowPlayingString.innerText= "exhale - gruber99 - pico 8 cover";
                break;
        }
        case 5:
        {
            nowPlayingString.innerText= "dirthmouth - gruber99 - pico 8 cover";
                break;
        }
        case 6:
        {
            nowPlayingString.innerText= "lacrimosa requiem";
                break;
        }
    }
}

function nextSong()
{
    idActualSong++;
    updatePlayer();
}
function previewSong()
{
    idActualSong--;
    updatePlayer();
}
const archivo = new Blob([0],{type: 'text/plain'});
const url = URL.createObjectURL(archivo);

function actualizarTarjetas(tarjetaAMostrar)
{
    switch(tarjetaAMostrar)
    {
        case 1:
        {
            document.getElementById("contenidoJugador1").hidden=false;
            document.getElementById("contenidoJugador2").hidden=true;
            break;
        }
        case 2:
        {
            document.getElementById("contenidoJugador1").hidden=true;
            document.getElementById("contenidoJugador2").hidden=false;
            break;
        }
    }
}