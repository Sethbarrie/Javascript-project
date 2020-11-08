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


class MovingObject{

    // constructor(){
    //     // let {speed,gravity,jump_height,friction,height,width,health,start_x,start_y,starting_status,animation_buffer, sprite_sheet, sprite_sheet_reversed, animation_frames} = object
    //     this.health = health;
    //     this.height = height;
    //     this.width = width;
    //     this.x = start_x;
    //     this.y = start_y;
    //     this.old_x = start_x;
    //     this.old_y = start_y;
    //     this.x_velocity = 0;
    //     this.y_velocity = 0;
    //     this.jumping = false;
    //     this.jumpingBuffer = true;
    //     this.swinging = false;
    //     this.inverted = false;
    //     this.oldStatus = starting_status;
    //     this.status = starting_status;
    //     this.animationFrame = 0;
    //     this.animation_frames = animation_frames;
    //     this.animationBuffer = animation_buffer;
    // }

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
    
    getXVelocity(){return this.x_velocity};
    getYVelocity(){return this.y_velocity};

    setXVelocity(x){this.x_velocity = x};
    setYVelocity(y){this.y_velocity = y};

    setInversion(){
        if(this.getXVelocity() === 0){
            return;
        }
        if(this.getXVelocity() < 0){
            this.inverted = true;
        } else {
            this.inverted = false;
        }
    }


    update(){
        this.setYVelocity((this.getYVelocity() + GRAVITY) * FRICTION);
        this.setXVelocity(this.getXVelocity() * FRICTION);
        this.setOldLeft(this.getLeft());
        this.setOldTop(this.getTop());
        this.setTop(this.getTop() + this.getYVelocity());
        this.setLeft(this.getLeft() + this.getXVelocity());
    }
    

    jump(){
        if(!this.jumping){
            this.setYVelocity(this.getYVelocity() - JUMP_HEIGHT)
        };
    }

    moveLeft(){
        this.setXVelocity(this.getXVelocity() - SPEED);
    }
    moveRight(){
        this.setXVelocity(this.getXVelocity() + SPEED);
    }
    crouch(){

    }

    updateStatus(newStatus){
        this.oldStatus = this.status;
        this.status = newStatus;
    }

}

export default MovingObject;