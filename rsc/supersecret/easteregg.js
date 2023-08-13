function writeOnPage(lootsong)
{
    var songLoaded;
    lootsong =Number(lootsong);
    switch(lootsong)
    {
        case 1:
        {
            songLoaded="1.mp3";
            break;        
        }
            
        case 12:
        {
            songLoaded="12.mp3";
            break;
        }
        case 13:
        {
            songLoaded="13.mp3";
            break;
        }
        case 19:
        {

            songLoaded="19.mp3";
            break;
        }

        case 20:
        {
            songLoaded="20.mp3";
            break;
        }
        case 21:
        {
            songLoaded="21.mp3";
            break;
        }
        case 23:
        {
            songLoaded="23.mp3";
            break;
        }
        case 28:
        {
            songLoaded="28.mp3";
            break;
        }
        case 33:
        {
            songLoaded="33.mp3";
            break;
        }

        case 34:
        {
            songLoaded="34.mp3";
            break;
        }

        case 37:
        {
            songLoaded="37.mp3";
            break;
        }

        case 38:
        {
            songLoaded="38.mp3";
            break;
        }

        case 39:
        {
            songLoaded="39.mp3";
            break;
        }

        case 40:
        {
            songLoaded="40.mp3";
            break;
        }

        case 41:
        {
            songLoaded="41.mp3";
            break;
        }

        case 43:
        {
            songLoaded="43.mp3";
            break;
        }

        case 63:
        {
            songLoaded="63.mp3";
            break;
        }

        case 74:
        {
            songLoaded="74.mp3";
            break;
        }

        case 82:
        {
            songLoaded="82.mp3";
            break;
        }

        case 92:
        {
            songLoaded="92.mp3";
            break;
        }
        case 100:
        {
            songLoaded="100.mp3";
            break;
        }
        default:
        {
            //songLoaded="100.mp3";
            alert("Algo fallÓ xd"+lootsong);
            break;
        }
    }
    
    return "../supersecret/msc/"+songLoaded;
}