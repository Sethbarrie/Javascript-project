// import Castle from './castle';
import Character from './character';
import Collision from './collision';
import Viewport from './viewport';
import {
    WINDOW_WIDTH,
    WINDOW_HEIGHT
} from './constants';


class Game {

    constructor(){
        this.collision = new Collision();
        this.sprites = {
            mainCharacter: new Character()
        };
        // this.castle = new Castle();
        this.viewport = new Viewport();
    }

    move(ctx){
        this.sprites.mainCharacter.move(this.sprites.mainCharacter);
        // this.collision.collisionDetection(this.sprites.mainCharacter);
    }
    
    draw(ctx){
        ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
        this.viewport.scrollingScreen(ctx, this.sprites.mainCharacter);
        // this.castle.draw(ctx);
        this.sprites.mainCharacter.draw(ctx);
        // ctx.imageSmoothingEnabled = false;
    }

}



export default Game;