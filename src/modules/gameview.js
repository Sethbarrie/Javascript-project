import Game from './game';
import {INTERVAL} from './constants';


class GameView{

    constructor(canvas, ctx){
        this.game = new Game()
        this.ctx = ctx
        this.canvas = canvas
    }

    play(){
        let that = this;
        setInterval(()=> {
            that.game.move();
            that.game.draw(that.ctx);
        }, INTERVAL);
    }
    
}


export default GameView