import HealthBar from '../entities/health_bar';
import {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    MAIN_CHARACTER,
    SKELETON
} from '../variables/constants';
import Character from '../entities/character';
import Enemy from '../entities/enemy';
import Castle from '../level/castle';

class Game {
    
    constructor(){
        this.mainCharacter = new Character(MAIN_CHARACTER);
        this.healthbar = new HealthBar();
        this.enemy = new Enemy(SKELETON);
        this.castle = new Castle();
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        
    }

    update(timeStep){
        this.mainCharacter.update(timeStep);
        this.enemy.update(timeStep);
        this.castle.update([this.mainCharacter, this.enemy]);
    }
    
    draw(ctx){
        ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
        this.castle.draw(ctx);
        this.mainCharacter.draw(ctx);
        this.enemy.draw(ctx);
        this.healthbar.draw(ctx,this.mainCharacter.totalHealth());
        ctx.imageSmoothingEnabled = false;
        if(this.mainCharacter.totalHealth() === 0){
            return true;
        }
        // this.debugMode(ctx);
    }

    debugMode(ctx){
        this.castle.debugMode(this.mainCharacter, ctx);
        this.mainCharacter.debugMode(ctx)
    }
    
}



export default Game;