import Game from './game';
import {INTERVAL} from './constants';


class GameView{

    constructor(canvas, ctx){
        this.game = new Game()
        this.ctx = ctx
        this.canvas = canvas
    }

    play(){
        let playing = setInterval(() => {
            if(this.game.mainCharacter.health > 0){
                this.game.move();
                this.game.draw(this.ctx);
            } else {
                for(let i = 0; i < 90; i ++){
                    setTimeout(() => {
                        this.game.move();
                        this.game.draw(this.ctx);
                    },INTERVAL);
                }
                let img = document.getElementsByClassName('you-died-img')[0].id = 'you-died-img-displayed';
                let audio = document.getElementById('you-died-audio');
                audio.volume = 0.025;
                audio.play();
                clearInterval(playing);
            }
        },INTERVAL);
    }
}


export default GameView