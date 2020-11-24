import {
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    TILE_SIZE,
    HEIGHT,
    WIDTH
} from '../variables/constants';

class Collision{

    constructor(){
    }

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
            character.jump.bonk();
        }
    }



    cornerCollision(character, collisionMap){
        let top, bottom, left, right, value;

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

        
        left = Math.floor(character.getLeft() / 32);
        bottom = Math.floor((character.getBottom()) / 32);
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
                this.collideBottom(character,x, y);
                break;
            case 2:
                this.collideLeft(character,x, y);
                break;
            case 3:
                this.collideRight(character,x, y);
                break;
            case 4:
                this.collideTop(character,x, y);
                break;        
            case 5:
                if(this.collideTop(character,x, y)) return;
                if(this.collideBottom(character,x, y)) return;
                if(this.collideLeft(character,x, y)) return;
                this.collideRight(character,x, y);
                break;
            case 6:
                if(this.collideTop(character,x, y)) return;
                this.collideBottom(character,x, y);
                break;
            case 7:
                if(this.collideTop(character,x, y)) return;
                if(this.collideBottom(character,x, y)) return;
                this.collideLeft(character,x, y);
                break;
            case 8:
                if(this.collideTop(character,x, y)) return;
                if(this.collideBottom(character,x, y)) return;
                this.collideRight(character,x, y);
                break;
            case 9:
                if(this.collideBottom(character,x, y)) return;
                this.collideLeft(character,x, y);
                break;
            case 10:
                if(this.collideRight(character,x, y)) return;
                this.collideLeft(character,x, y);
                break;        
            case 11:
                if(this.collideBottom(character,x, y)) return;
                if(this.collideLeft(character,x, y)) return;
                this.collideRight(character,x, y);
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


    collideTop(character,x, y){
        if(character.positioning.getYVelocity() > 0) return false;
        if((character.positioning.getTop()) < y + TILE_SIZE && character.positioning.getOldTop() >= y + TILE_SIZE){
            character.positioning.setTop(y + TILE_SIZE);
            character.jump.bonk();
            character.positioning.setYVelocity(0);
            return true;
        }
        return false;
    }

    collideBottom(character,x, y){
        if((character.positioning.getBottom()) >= y && character.positioning.getOldBottom() <= y){
            character.positioning.setBottom(y);
            character.jump.bonk();
            character.positioning.setYVelocity(0);
            return true;
        }
        return false;    
    }

    collideLeft(character,x, y){
        if(character.positioning.getXVelocity() < 0) return false;
        if((character.positioning.getRight()) > x && character.positioning.getOldRight() <= x){
            character.positioning.setRight(x);
            character.positioning.setXVelocity(0);
            return true;
        }
        return false;
    }
    
    collideRight(character,x, y){
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

    debugMode(entity, collisionMap, ctx){
        debugger
        let top = Math.floor((entity.getTop() - 1) / 32);
        let left = Math.floor((entity.getLeft() - 1) / 32);
        let right = Math.floor(entity.getRight() / 32);
        let bottom = Math.floor(entity.getBottom() / 32);

        let topLeft = {
            value: collisionMap[(top * 32 + left)],
            x: (left) * 32,
            y: top * 32
        };
        let topRight = {
            value: collisionMap[(top * 32 + right)],
            x: right * 32,
            y: top * 32
        };
        let middleLeft = {
            value: collisionMap[(top * 32 + left)],
            x: (left) * 32,
            y: (top + 1) * 32
        };
        let middleRight = {
            value: collisionMap[(top * 32 + right)],
            x: right * 32,
            y: (top + 1) * 32
        };
        let bottomLeft = {
            value: collisionMap[(bottom * 32 + left)],
            x: left * 32,
            y: bottom * 32
        };
        let bottomRight = {
            value: collisionMap[(bottom * 32 + right)],
            x: right * 32,
            y: bottom * 32
        };

        [
            topLeft, 
            topRight, 
            middleLeft, 
            middleRight, 
            bottomLeft, 
            bottomRight
        ].forEach( square => {
            if(square.value){
                ctx.beginPath();
                ctx.rect(
                    square.x,
                    square.y,
                    32,
                    32
                );
                ctx.lineWidth = '1';
                ctx.strokeStyle = 'white';
                ctx.stroke();
            }
        });        
    }
}


// value = collisionMap[top * 32 + left];
// this.collision(value, character, (left * 32), (top * 32) )

// value = collisionMap[top * 32 + right];
// this.collision(value, character, (right * 32), (top * 32) )

// value = collisionMap[top * 32 + left];
// this.collision(value, character, (left * 32), (top * 32) )

// value = collisionMap[top * 32 + right];
// this.collision(value, character, (right * 32), (top * 32) )

// value = collisionMap[bottom * 32 + left];
// this.collision(value, character, (left * 32), (bottom * 32) )

// value = collisionMap[bottom * 32 + right];
// this.collision(value, character, (right * 32), (bottom * 32) )

export default Collision;