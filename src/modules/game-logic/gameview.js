import Game from './game';
import {INTERVAL} from '../variables/constants';
import Timer from './timer';

class GameView{

    constructor(canvas, ctx, volume){
        this.game = new Game(this);
        this.ctx = ctx;
        this.canvas = canvas;
        this.start = performance.now();
        this.timer = new Timer(INTERVAL, this.game.update, this.game.draw, ctx, this);
        this.volume = volume;
    }

    play(){
        this.timer.start()
    }

    killVolume(){
        return this.volume;
    }

    finalTime(){
        let then = this.start;
        let now = performance.now();
        return  (now - then);
    }

}


export default GameView;