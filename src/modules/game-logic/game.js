import HealthBar from '../entities/health_bar';
import {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    MAIN_CHARACTER
} from '../variables/constants';
import Character from '../entities/character';
import Castle from '../level/castle';
import Fireworks from '../fireworks/fireworks';

class Game {
    
    constructor(parent){
        this.parent = parent;
        this.enemies = [];
        this.mainCharacter = new Character(MAIN_CHARACTER);
        this.healthbar = new HealthBar();
        this.castle = new Castle(this);
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.buffer = document.createElement('canvas');
        this.buffer.height = WINDOW_HEIGHT;
        this.buffer.width = WINDOW_WIDTH;
        this.bufferCTX = this.buffer.getContext('2d');
        this.fireworks = new Fireworks();    
    }

    update(timeStep){
        this.mainCharacter.update(timeStep);
        this.enemies.forEach(enemy => {
            enemy.playerInSight(this.mainCharacter);
            enemy.update(timeStep);
        })
        this.castle.update([this.mainCharacter].concat(this.enemies));
        if(this.fireworks.started){
            this.fireworks.update(timeStep);
        }
    }
    
    draw(ctx){
        ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
        this.bufferCTX.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
        this.castle.draw(this.bufferCTX);
        this.mainCharacter.draw(this.bufferCTX);
        this.enemies.forEach(enemy => {
            enemy.draw(this.bufferCTX);
        });
        this.healthbar.draw(this.bufferCTX,this.mainCharacter.totalHealth());
        if(this.fireworks.started){
            this.fireworks.draw(this.bufferCTX);
        }
        this.bufferCTX.imageSmoothingEnabled = false;
        ctx.drawImage(this.buffer, 0, 0);
        if(this.mainCharacter.totalHealth() === 0){
            return true;
        }
        // this.debugMode(ctx);
    }

    debugMode(ctx){
        this.castle.debugMode(this.mainCharacter, ctx);
        this.enemies.forEach(enemy => {
            enemy.debugMode(ctx);
        })    
        this.mainCharacter.debugMode(ctx);
    }
    
}



export default Game;