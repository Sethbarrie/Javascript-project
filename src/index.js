import GameView from './modules/game-logic/gameview';
import { 
    WINDOW_HEIGHT, 
    WINDOW_WIDTH 
} from './modules/variables/constants';

document.addEventListener("DOMContentLoaded", () => {
    let img = document.getElementsByClassName('hidden-game-canvas-displayed')[0];
    const canvasElement = document.getElementsByClassName("game-canvas")[0];
    const ctx = canvasElement.getContext("2d");
    canvasElement.height = WINDOW_HEIGHT;
    canvasElement.width = WINDOW_WIDTH;
    let gameAudio = document.getElementById('main-audio');
    gameAudio.volume = 0.025;
    let initClick = false;

    let volume = false;

    const start = () => {
        initClick = true;
        img.id = 'hidden-game-canvas-hidden';
        gameView.play();
        gameAudio.play();
        document.removeEventListener('click', start, false)
    }
    
    let gameView = new GameView(canvasElement, ctx, volume);
    
    document.addEventListener('click', start , false);

    document.addEventListener('keydown', e => {
        if(e.key === 'Tab'){
            location.reload();
        }
    })

    const killVolume = () => {
        initClick = false;
        gameAudio.pause();
    }

    let muted = document.getElementsByClassName('material-icons')[0];
    let unmuted = document.getElementsByClassName('material-icons')[1];

    muted.id = 'hidden-volume';
    unmuted.id = 'visible-volume';

    muted.addEventListener('click', (e) => {
        if(initClick){
            gameAudio.play();
            volume = true;
            gameView.volume = true;
            muted.id = 'hidden-volume';
            unmuted.id = 'visible-volume';
        }
    })
    unmuted.addEventListener('click', (e) => {
        if(initClick){
            gameAudio.pause();
            volume = false;
            gameView.volume = false;
            unmuted.id = 'hidden-volume';
            muted.id = 'visible-volume';
        }
    })
    let audio = document.getElementById('you-died-audio');
    audio.addEventListener('play', () => {
        killVolume();
        removeEventListener('play', killVolume);
    })
});