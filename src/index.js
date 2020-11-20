import GameView from './modules/gameview';
import { 
    WINDOW_HEIGHT, 
    WINDOW_WIDTH 
} from './modules/constants';

document.addEventListener("DOMContentLoaded", () => {
    const canvasElement = document.getElementById("game-canvas")
    const ctx = canvasElement.getContext("2d")
    canvasElement.height = WINDOW_HEIGHT;
    canvasElement.width = WINDOW_WIDTH;
    
    const gameView = new GameView(canvasElement, ctx);
    
    gameView.play();
});
