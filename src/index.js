import GameView from './modules/game-logic/gameview';
import { 
    WINDOW_HEIGHT, 
    WINDOW_WIDTH 
} from './modules/variables/constants';

document.addEventListener("DOMContentLoaded", () => {
    const canvasElement = document.getElementById("game-canvas")
    const ctx = canvasElement.getContext("2d")
    canvasElement.height = WINDOW_HEIGHT;
    canvasElement.width = WINDOW_WIDTH;
    
    const gameView = new GameView(canvasElement, ctx);
    
    gameView.play();
});
