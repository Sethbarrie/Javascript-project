// import Castle from './castle';
import Character from './character';
import Collision from './collision';
import Viewport from './viewport';
import Enemy from './enemies';
import {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    MAIN_CHARACTER
} from './constants';


class Game {

    constructor(){
        this.collision = new Collision();
        this.mainCharacter = new Character(MAIN_CHARACTER)
        this.sprites = {skeleton1: new Enemy()};
        // this.castle = new Castle();
        this.viewport = new Viewport();
    }

    move(ctx){
        let enemies = Object.values(this.sprites);
        if(enemies.length > 0){
            enemies.forEach( enemy => {
                if(this.collision.enemyCollision(this.mainCharacter, enemy) && enemy.health > 0){
                    if(this.collision.swordCollision(this.mainCharacter, enemy)){
                        if(enemy.health > 0){
                            enemy.health -= 1;
                        }
                    } else if(this.mainCharacter.damageCounter === 60) {
                        this.mainCharacter.damage = true; 
                    }
                };
            });
        }
        this.mainCharacter.move(this.sprites.mainCharacter);
        // this.collision.collisionDetection(this.sprites.mainCharacter);
    }
    
    draw(ctx){
        let enemies = Object.values(this.sprites);
        ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
        this.viewport.scrollingScreen(ctx, this.mainCharacter);
        enemies.forEach( enemy => {
            enemy.draw(ctx);
        });
        this.mainCharacter.draw(ctx);
        ctx.imageSmoothingEnabled = false;
    }

}



export default Game;