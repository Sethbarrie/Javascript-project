import Castle from './castle';
// import Character from './character';
import Collision from './collision';
import Viewport from './viewport';
// import Enemy from './enemies';
// import HealthBar from './health_bar';
import {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    MAIN_CHARACTER
} from './constants';
import Character from './entities/character';

class Game {

    // constructor(){
    //     this.collision = new Collision();
    //     this.mainCharacter = new Character(MAIN_CHARACTER)
    //     this.sprites = {skeleton1: new Enemy()};
    //     this.castle = new Castle();
    //     this.viewport = new Viewport();
    //     this.healthbar = new HealthBar(this.mainCharacter);
    //     this.move = this.move.bind(this);
    //     this.draw = this.draw.bind(this);
    // }

    // move(){
    //     let enemies = Object.values(this.sprites);
    //     if(enemies.length > 0){
    //         enemies.forEach( enemy => {
    //             this.collision.enemyCollision(enemy, this.mainCharacter);
    //         });
    //     }
    //     this.mainCharacter.move();
    // }
    // draw(ctx){
    //     let enemies = Object.values(this.sprites);
    //     ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
    //     this.viewport.scrollingScreen(ctx, this.mainCharacter);
    //     enemies.forEach( enemy => {
    //         enemy.draw(ctx);
    //     });
    //     this.mainCharacter.draw(ctx);
    //     this.healthbar.draw(ctx);
    //     ctx.imageSmoothingEnabled = false;
    // }
    
    constructor(){
        this.mainCharacter = new Character(MAIN_CHARACTER);
        this.viewport = new Viewport();
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
    }

    update(timeStep){
        this.mainCharacter.update(timeStep);
    }

    draw(ctx){
        // let enemies = Object.values(this.sprites);
        ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
        this.viewport.scrollingScreen(ctx, this.mainCharacter);
        // enemies.forEach( enemy => {
        //     enemy.draw(ctx);
        // });
        this.mainCharacter.draw(ctx);
        // this.healthbar.draw(ctx);
        // ctx.imageSmoothingEnabled = false;
    }
    
}



export default Game;