import Sword from './sword';
import Tilesheet from './tilesheet';
import {
    SPEED,
    GRAVITY,
    JUMP_HEIGHT,
    FRICTION, 
    HEIGHT,
    WIDTH,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    TILE_SIZE,
    ACTIVE_KEYS
} from './constants';

class Character {
    constructor(){
        this.height = HEIGHT;
        this.width = WIDTH;
        this.health = 10;
        this.x = 20;
        this.y = 686;
        this.old_x = 20;
        this.old_y = 686;
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.jumping = false;
        this.jumpingBuffer = true;
        this.swinging = false;
        this.swordDropping = false;
        this.swingFrame = 0;
        this.sword = new Sword();
        setKeyBinding();
    }

    move(){
        this.jump()
        // if((ACTIVE_KEYS[" "] && !this.jumping) && this.y_velocity === 0 
        // || (ACTIVE_KEYS["ArrowUp"] && !this.jumping) && this.y_velocity === 0){
        //     this.y_velocity -= JUMP_HEIGHT;
        //     this.jumping = true;
        //     ACTIVE_KEYS[" "] = false;
        // };
        if(ACTIVE_KEYS['a'] || ACTIVE_KEYS['ArrowLeft']){
            this.x_velocity -= SPEED;
        }
        if(ACTIVE_KEYS['d'] || ACTIVE_KEYS['ArrowRight']){
            this.x_velocity += SPEED;
        }

        this.y_velocity += GRAVITY;
        this.x_velocity *= FRICTION;
        this.y_velocity *= FRICTION;
        
        this.old_x = this.x;
        this.x += this.x_velocity;
        this.old_y = this.y;
        this.y += this.y_velocity;
        

        // if(ACTIVE_KEYS['Shift']){
        //     if(!this.swinging){
        //         this.swinging = true;
        //         this.swingFrame = 10;
        //     } else {
        //         this.swingFrame -= 1;
        //     }
        // }
        // if(this.swingFrame <= 0){
        //     this.swinging = false;
        // }
    };

    jump(){
        if(ACTIVE_KEYS[" "] && !this.jumping && this.y_velocity === 0 && this.jumpingBuffer){
            this.y_velocity -= JUMP_HEIGHT;
            this.jumping = true;
            this.jumpingBuffer = false;
            ACTIVE_KEYS[" "] = false;
            return;
        };
        if(ACTIVE_KEYS["ArrowUp"] && !this.jumping && this.y_velocity === 0 && this.jumpingBuffer){
            this.y_velocity -= JUMP_HEIGHT;
            this.jumping = true;
            this.jumpingBuffer = false;
            ACTIVE_KEYS[" "] = false;
            return;
        };
        if(!ACTIVE_KEYS[" "] && !this.jumping && this.y_velocity === 0 && !this.jumpingBuffer && !ACTIVE_KEYS['ArrowUp']){
            this.jumpingBuffer = true
        };
        if(!ACTIVE_KEYS["ArrowUp"] && !this.jumping && this.y_velocity === 0 && !this.jumpingBuffer && !ACTIVE_KEYS[" "]){
            this.jumpingBuffer = true
        };
    };

    draw(ctx){
        // this.swinging ? this.sword.swing(ctx, this.x, this.y) : null;
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    getTop(){return this.y};
    getBottom(){return this.y + this.height};
    getLeft(){return this.x};
    getRight(){return this.x + this.width};
    
    getOldTop(){return this.old_y};
    getOldBottom(){return this.old_y + this.height};
    getOldLeft(){return this.old_x};
    getOldRight(){return this.old_x + this.width};
    
    setTop(y){this.y = y};
    setBottom(y){this.y = y - this.height};
    setLeft(x){this.x = x};
    setRight(x){this.x = x - this.width};
    
    setOldTop(y){this.old_y = y};
    setOldBottom(y){this.old_y = y - this.height};
    setOldLeft(x){this.old_x = x};
    setOldRight(x){this.old_x = x - this.width};

    setXVelocity(x){this.x_velocity = x};
    setYVelocity(y){this.y_velocity = y};
}

const setKeyBinding = () => {
    window.addEventListener('keydown', e => {
        switch(e.key){
            case('a'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowLeft'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('d'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowRight'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case(" "):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('w'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowUp'):
                ACTIVE_KEYS[e.key] = true;
                break;                
            case('s'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowDown'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('Shift'):
                ACTIVE_KEYS[e.key] = true;
                break;
            default:
                break;
        }
        e.preventDefault()
    });
    window.addEventListener('keyup', e => {
        switch(e.key){
            case('a'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowLeft'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('d'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowRight'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case(" "):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('w'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowUp'):
                ACTIVE_KEYS[e.key] = false;
                break;                
            case('s'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowDown'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('Shift'):
                ACTIVE_KEYS[e.key] = false;
                break;
            default:
                break;
        }
        e.preventDefault()
    });
}


export default Character;