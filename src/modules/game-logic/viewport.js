import Collision from '../level/collision';
import { 
    MAPS_LIST
} from '../variables/constants';

class Viewport{

    constructor(startLevel){
        this.visibleMap = MAPS_LIST[startLevel].visualMap;
        this.currentCollisionMap = MAPS_LIST[startLevel].collisionMap;
        this.collision = new Collision();
        this.currentLevel = startLevel;
        this.scrolled = true;
    }

    update(entities){
        entities.forEach((entity,idx) => {
            if(idx === 0){
                this.characterScrollingScreen(entity);
                this.characterCollision(entity);
                for(let i = 1; i < entities.length; i ++){
                    this.entityCollision(entity, entities[i]);
                }
            } else {
                this.enemyCollision(entity);
                this.entityCollision(entity, entities[0])
            }
        })
        return this.currentLevel;
    }
    
    debugMode(character, ctx){
        this.collision.debugMode(character, this.currentCollisionMap, ctx);
    }

    characterScrollingScreen(character){
        if(character.getTop() < 0){
            character.setTop(680);
            this.currentLevel += 1;
            this.visibleMap = MAPS_LIST[this.currentLevel].visualMap;
            this.currentCollisionMap = MAPS_LIST[this.currentLevel].collisionMap;
            this.scrolled = true;
        } else {
            this.scrolled = false;
        }
    }
    
    characterCollision(character){        
        this.collision.collisionDetection(character, this.currentCollisionMap);
    }

    enemyCollision(enemy){
        this.collision.collisionDetection(enemy, this.currentCollisionMap);
    }

    entityCollision(character, enemy){
        character.weaponCollision(enemy);
    }
}


export default Viewport;