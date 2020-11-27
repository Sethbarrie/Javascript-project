import GameView from './modules/game-logic/gameview';
import { 
    WINDOW_HEIGHT, 
    WINDOW_WIDTH 
} from './modules/variables/constants';

document.addEventListener("DOMContentLoaded", () => {
    let img = document.getElementsByClassName('hidden-game-canvas-displayed')[0];
    const canvasElement = document.getElementById("game-canvas");
    const ctx = canvasElement.getContext("2d");
    canvasElement.height = WINDOW_HEIGHT;
    canvasElement.width = WINDOW_WIDTH;
    
    let gameView = new GameView(canvasElement, ctx);
    document.addEventListener('click', () => {
        img.id = 'hidden-game-canvas-hidden';
        gameView.play();
        document.removeEventListener('click');
    }, false
    )
    document.addEventListener('keydown', e => {
        if(e.key === 'Tab'){
            location.reload();
        }
    })
});