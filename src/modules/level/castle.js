import Enemy from '../entities/enemy';
import Tilesheet from '../game-logic/tilesheet';
import Viewport from '../game-logic/viewport';
import {
    WORLD_SPRITE_SHEET,
    COLUMNS,
    TILE_SIZE,
    SKELETON
} from '../variables/constants';
import {TILE_SHEET_KEY} from '../variables/tile_keys';


class Castle{

    constructor(parent){
        this.parent = parent;
        this.level = 0;
        this.viewport = new Viewport(this.level);
        this.image = new Tilesheet(
            TILE_SIZE,
            TILE_SIZE,
            COLUMNS,
            TILE_SHEET_KEY,
            WORLD_SPRITE_SHEET()
        );
        this.readEnemiesFromMap()
    }

    update(entities){
        this.level = this.viewport.update(entities);
    }

    draw(ctx){
        if(this.viewport.scrolled){
            this.deleteEnemy();
            this.readEnemiesFromMap();
        }
        this.viewport.visibleMap.forEach((tile, idx) => {
            this.image.drawCastle(idx, tile);
        });
        this.image.draw(ctx, this.viewport.scrolled);
    }
    
    debugMode(character, ctx){
        this.viewport.debugMode(character, ctx);
    }

    readEnemiesFromMap(){
        this.viewport.currentCollisionMap.forEach((tile, idx) => {
            this.enemyTile(tile, idx);
        })        
    }

    
    enemyTile(tile, idx){
        switch(tile){
            case 45:
                let [ startX, startY ] = this.getEnemyPositionFromIDX(idx);
                this.createEnemy(SKELETON, startX, (startY - SKELETON.height));
            default:
                return;
        }
    }
            
    getEnemyPositionFromIDX(idx){
        let startX = (idx % 32) * 32;
        let startY = (Math.ceil(idx / 32)) * 32;
        return [startX, startY];
    }
            
            
    createEnemy(characterSheet, startX, startY){
        let enemy = new Enemy(characterSheet, startX, startY);
        this.parent.enemies.push(enemy);
    }

    deleteEnemy(){
        this.parent.enemies = [];
    }
}



export default Castle;