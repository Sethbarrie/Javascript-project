// import * as CollisionMap from './collision_map';
import {
    TILE_SHEET_KEY,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    TILE_SIZE,
    HEIGHT,
    WIDTH
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

        top = Math.floor((character.getTop() + (HEIGHT / 2)) / 32);
        left = Math.floor((character.getLeft()) / 32);
        value = collisionMap[top * 32 + left];
        this.collision(value, character, (left * 32), (top * 32) )

        top = Math.floor((character.getTop() + (HEIGHT / 2)) / 32);
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
                // debugger
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
                if(this.collideTop(character, y)) return;
                if(this.collideBottom(character, y)) return;
                this.collideLeft(character, x);
                break;
            case 8:
                if(this.collideTop(character, y)) return;
                if(this.collideBottom(character, y)) return;
                this.collideRight(character, x);
                break;
            case 9:
                if(this.collideBottom(character, y)) return;
                this.collideLeft(character, x);
                break;
            case 10:
                // debugger
                if(this.collideRight(character, x)) return;
                this.collideLeft(character, x);
                break;        
            case 11:
                this.collideTop(character, y);
                if(this.collideLeft(character, x)) return;
                this.collideRight(character, x);
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
        if((character.getTop()) < y + TILE_SIZE && character.getOldTop() >= y + TILE_SIZE){
            character.setTop(y + TILE_SIZE);
            character.jumping = false;
            character.setYVelocity(0);
            return true;
        }
        return false;
    }

    collideBottom(character, y){
        // debugger
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
        if((character.getLeft()) < x + TILE_SIZE && character.getOldLeft() >= x + TILE_SIZE){
            character.setLeft(x + TILE_SIZE);
            character.setXVelocity(0);
            return true;
        }
        return false;    
    }

    enemyCollision(mainCharacter, enemy){
        if(
            mainCharacter.getLeft() < enemy.getRight() && enemy.getRight() < mainCharacter.getRight() ||
            mainCharacter.getRight() > enemy.getLeft() && enemy.getLeft() > mainCharacter.getLeft()
        ){  
            if(
                mainCharacter.getTop() < enemy.getBottom() && enemy.getBottom() < mainCharacter.getBottom() ||
                mainCharacter.getBottom() < enemy.getTop() && enemy.getTop() > mainCharacter.getTop()
            ){
                return true;
            } else{
                return false;
            }
        } else {
            return false;
        }
    }

    swordCollision(mainCharacter, enemy){
        if(!mainCharacter.swinging){
            return false;
        }
        if(mainCharacter.inverted){
            if(
                mainCharacter.getLeft() - 16 < enemy.getRight() && enemy.getRight() < mainCharacter.getRight() ||
                mainCharacter.getRight() > enemy.getLeft() && enemy.getLeft() > mainCharacter.getLeft()
            ){  
                if(
                    mainCharacter.getTop() < enemy.getBottom() && enemy.getBottom() < mainCharacter.getBottom() ||
                    mainCharacter.getBottom() < enemy.getTop() && enemy.getTop() > mainCharacter.getTop()
                ){
                    return true;
                } else{
                    return false;
                }
            } else {
                return false;
            }
        }else {
            if(
                mainCharacter.getSwordLeft() < enemy.getRight() && enemy.getRight() < mainCharacter.getSwordRight() ||
                mainCharacter.getRight() > enemy.getLeft() && enemy.getLeft() > mainCharacter.getSwordLeft()
            ){  
                if(
                    mainCharacter.getSwordTop() < enemy.getBottom() && enemy.getBottom() < mainCharacter.getSwordBottom() ||
                    mainCharacter.getSwordBottom() < enemy.getTop() && enemy.getTop() > mainCharacter.getSwordTop()
                ){
                    return true;
                } else{
                    return false;
                }
            } else {
                return false;
            }
        }
    }


}

export default Collision;