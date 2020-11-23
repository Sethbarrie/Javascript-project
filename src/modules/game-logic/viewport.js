import Castle from '../level/castle';
import Collision from '../level/collision';
import { 
    MAPS_LIST
} from '../variables/constants';

class Viewport{

    constructor(){
        this.castle = new Castle();
        this.collision = new Collision();
        this.visibleMap = MAPS_LIST[this.castle.level].visualMap;
        this.currentCollisionMap = MAPS_LIST[this.castle.level].collisionMap;
    }

    scrollingScreen(ctx, character){
        if(character.getTop() < 0){
            character.setTop(680);
            this.castle.level += 1;
            this.visibleMap = MAPS_LIST[this.castle.level].visualMap;
            this.currentCollisionMap = MAPS_LIST[this.castle.level].collisionMap;
            this.collision.collisionDetection(character, this.currentCollisionMap);
            this.castle.draw(ctx, this.visibleMap);
        } else {
            this.collision.collisionDetection(character, this.currentCollisionMap);
            this.castle.draw(ctx, this.visibleMap);
        }
    }
}


export default Viewport;