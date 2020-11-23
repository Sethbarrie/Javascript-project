import {
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    TILE_SIZE,
    HEIGHT,
    WIDTH
} from '../variables/constants';

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
        if(character.positioning.getLeft() < 0){
            character.positioning.setLeft(0);
            character.positioning.setXVelocity(0);
        }
        if(character.positioning.getRight() > WINDOW_WIDTH){
            character.positioning.setRight(WINDOW_WIDTH);
            character.positioning.setXVelocity(0);
        }
        if(character.positioning.getBottom() > (WINDOW_HEIGHT - TILE_SIZE)){
            character.positioning.setBottom((WINDOW_HEIGHT - TILE_SIZE));
            character.positioning.setYVelocity(0);
            character.jump.bonk();
        }

    }

    cornerCollision(character, collisionMap){
        let top, bottom, left, right, value;

        top = Math.floor(character.positioning.getTop() / 32);
        left = Math.floor(character.positioning.getLeft() / 32);
        value = collisionMap[top * 32 + left];
        this.collision(value, character, (left * 32), (top * 32) )

        
        top = Math.floor(character.positioning.getTop() / 32);
        right = Math.floor((character.positioning.getRight()) / 32);
        value = collisionMap[top * 32 + right];
        this.collision(value, character, (right * 32), (top * 32) )

        top = Math.floor((character.positioning.getTop() + (HEIGHT / 2)) / 32);
        left = Math.floor((character.positioning.getLeft()) / 32);
        value = collisionMap[top * 32 + left];
        this.collision(value, character, (left * 32), (top * 32) )

        top = Math.floor((character.positioning.getTop() + (HEIGHT / 2)) / 32);
        right = Math.floor((character.positioning.getRight()) / 32);
        value = collisionMap[top * 32 + right];
        this.collision(value, character, (right * 32), (top * 32) )

        
        bottom = Math.floor((character.positioning.getBottom()) / 32);
        left = Math.floor(character.positioning.getLeft() / 32);
        value = collisionMap[bottom * 32 + left];
        this.collision(value, character, (left * 32), (bottom * 32) )

        
        bottom = Math.floor((character.positioning.getBottom()) / 32);
        right = Math.floor((character.positioning.getRight()) / 32);
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
                this.collideRight(character, x);
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
                if(this.collideRight(character, x)) return;
                this.collideLeft(character, x);
                break;        
            case 11:
                if(this.collideBottom(character, y)) return;
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
            case 69:
                this.healthBarCollision(character);
                break;       
            default:
                break;
        }
    }


    collideTop(character, y){
        if(character.positioning.getYVelocity() > 0) return false;
        if((character.positioning.getTop()) < y + TILE_SIZE && character.positioning.getOldTop() >= y + TILE_SIZE){
            character.positioning.setTop(y + TILE_SIZE);
            character.jump.bonk();
            character.positioning.setYVelocity(0);
            return true;
        }
        return false;
    }

    collideBottom(character, y){
        // debugger;
        if((character.positioning.getBottom()) >= y && character.positioning.getOldBottom() <= y){
            character.positioning.setBottom(y);
            character.jump.bonk();
            character.positioning.setYVelocity(0);
            return true;
        }
        return false;    
    }

    collideLeft(character, x){
        if(character.positioning.getXVelocity() < 0) return false;
        if((character.positioning.getRight()) > x && character.positioning.getOldRight() <= x){
            character.positioning.setRight(x);
            character.positioning.setXVelocity(0);
            return true;
        }
        return false;
    }
    
    collideRight(character, x){
        if(character.positioning.getXVelocity() > 0) return false;
        if((character.positioning.getLeft()) < x + TILE_SIZE && character.positioning.getOldLeft() >= x + TILE_SIZE){
            character.positioning.setLeft(x + TILE_SIZE);
            character.positioning.setXVelocity(0);
            return true;
        }
        return false;    
    }

    healthBarCollision(character){
        if(character.hitboxActive() && character.weaponCollision(10, 10, 130,130)){
            character.damageEntity(1)
        }
    }

}

export default Collision;