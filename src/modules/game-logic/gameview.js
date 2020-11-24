import Game from './game';
import {INTERVAL} from '../variables/constants';
import Timer from './timer';

class GameView{

    constructor(canvas, ctx){
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.canvas = canvas;
        this.timer = new Timer(INTERVAL, this.game.update, this.game.draw,ctx);
        
    }

    play(){
        this.timer.start()
    }

    // play(deltaTime){
    //     setInterval(() => {
    //         this.game.move(deltaTime);
    //         this.game.draw(this.ctx);             
    //     }, INTERVAL);
    // }

    // gameOver(){
    //     for(let i = 0; i < 90; i ++){
    //         setTimeout(() => {
    //             this.game.move();
    //             this.game.draw(this.ctx);
    //         },INTERVAL);
    //     }
    //     let img = document.getElementsByClassName('you-died-img')[0].id = 'you-died-img-displayed';
    //     let audio = document.getElementById('you-died-audio');
    //     audio.volume = 0.025;
    //     audio.play();
    // }


}


export default GameView;