import Castle from './castle';
import Collision from './collision'
import { testMap } from './castle_level';
import { collisionTestMap } from './collision_map'

class Viewport{

    constructor(){
        this.scrolling = false;
        this.visibleMap = testMap.slice(23 * 32);
        this.collisionMap = collisionTestMap.slice(23 * 32)
        this.castle = new Castle();
        this.collision = new Collision();
    }


    scrollingScreen(ctx, character){
        if(this.scrolling){
            if(character.getTop() > 768){
                this.scrolling = false;
            } else {
                this.visibleMap = testMap.slice(0,24*32);
                this.collisionMap = collisionTestMap.slice(0,24*32);
                this.collision.collisionDetection(character, this.collisionMap) 
                this.castle.draw(ctx, this.visibleMap);
            }
        } else {
            if(character.getTop() < 0){
                this.scrolling = true;
                character.setTop(680);
            }
        }
        this.collision.collisionDetection(character, this.collisionMap) 
        this.castle.draw(ctx, this.visibleMap);
    }
}


export default Viewport;