// import * as CollisionMap from './collision_map';
import {
    TILE_SHEET_KEY,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    TILE_SIZE
} from './constants';

class Collision{

    collisionDetection(character, collisionMap){
        this.edgeCollision(character);
        this.cornerCollision(character, collisionMap);
    }

    edgeCollision(character){
        // if(character.getTop() < 0){
        //     character.setTop(0);
        //     character.setYVelocity(0);
        // }
        if(character.getLeft() < 0){
            character.setLeft(0);
            character.setXVelocity(0);
        }
        if(character.getRight() > WINDOW_WIDTH){
            character.setRight(WINDOW_WIDTH);
            character.setXVelocity(0);
        }
        if(character.getBottom() > (WINDOW_HEIGHT - TILE_SIZE)){
            character.setBottom((WINDOW_HEIGHT - TILE_SIZE));
            character.setYVelocity(0);
            character.jumping = false;
        }

    }

    cornerCollision(character, collisionMap){
        let top, bottom, left, right, value;
        // debugger

        top = Math.floor(character.getTop() / 32);
        left = Math.floor(character.getLeft() / 32);
        value = collisionMap[top * 32 + left];
        this.collision(value, character, (left * 32), (top * 32) )

        
        top = Math.floor(character.getTop() / 32);
        right = Math.floor((character.getRight()) / 32);
        value = collisionMap[top * 32 + right];
        this.collision(value, character, (right * 32), (top * 32) )

        top = Math.floor((character.getTop() + 25) / 32);
        left = Math.floor((character.getLeft()) / 32);
        value = collisionMap[top * 32 + left];
        this.collision(value, character, (left * 32), (top * 32) )

        top = Math.floor((character.getTop() + 25) / 32);
        right = Math.floor((character.getRight()) / 32);
        value = collisionMap[top * 32 + right];
        this.collision(value, character, (right * 32), (top * 32) )

        
        bottom = Math.floor((character.getBottom()) / 32);
        left = Math.floor(character.getLeft() / 32);
        value = collisionMap[bottom * 32 + left];
        this.collision(value, character, (left * 32), (bottom * 32) )

        
        bottom = Math.floor((character.getBottom()) / 32);
        right = Math.floor((character.getRight()) / 32);
        value = collisionMap[bottom * 32 + right];
        this.collision(value, character, (right * 32), (bottom * 32) )

    }

    collision(value, character, x, y){

        switch(value){
            case 1:
                this.collideBottom(character, y);
                break;
            case 2:
                this.collideLeft(character, x);
                break;
            case 3:
                this.collideRight(character, x);
                break;
            case 4:
                this.collideTop(character, y);
                break;        
            case 5:
                if(this.collideTop(character, y)) return;
                if(this.collideBottom(character, y)) return;
                if(this.collideLeft(character, x)) return;
                if(this.collideRight(character, x)) return;
                break;
            case 6:
                if(this.collideTop(character, y)) return;
                this.collideBottom(character, y);
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;        
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 14:
                break;
            case 15:
                break;
            case 16:
                break;        
            case 17:
                break;
            case 18:
                break;
            case 19:
                break;
            case 20:
                break;       
            default:
                break;
        }
    }


    collideTop(character, y){
        if((character.getTop()) < y + 32 && character.getOldTop() >= y + 32){
            character.setTop(y + 32);
            character.jumping = false;
            character.setYVelocity(0);
            return true;
        }
        return false;
    }

    collideBottom(character, y){
        if((character.getBottom()) > y && character.getOldBottom() <= y){
            character.setBottom(y);
            character.jumping = false;
            character.setYVelocity(0);
            return true;
        }
        return false;    
    }

    collideLeft(character, x){
        // debugger
        if((character.getRight()) > x && character.getOldRight() <= x){
            character.setRight(x);
            character.setXVelocity(0);
            return true;
        }
        return false;
    }
    
    collideRight(character, x){
        // debugger
        if((character.getLeft()) < x + 32 && character.getOldLeft() >= x + 32){
            character.setLeft(x + 32);
            character.setXVelocity(0);
            return true;
        }
        return false;    
    }

}

export default Collision;