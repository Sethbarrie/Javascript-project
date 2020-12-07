import Game from './game';
import {INTERVAL} from '../variables/constants';
import Timer from './timer';

class GameView{

    constructor(canvas, ctx, parent){
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.canvas = canvas;
        this.timer = new Timer(INTERVAL, this.game.update, this.game.draw, ctx, parent);
    }

    play(){
        this.timer.start()
    }

}


export default GameView;