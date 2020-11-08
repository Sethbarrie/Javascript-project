import {
    HEIGHT,
    WIDTH,
    ACTIVE_KEYS,
    ANIMATION_FRAMES_MC,
    PLAYER_SPRITE_SHEET,
    PLAYER_SPRITE_SHEET_REVERSED,
    HEALTH,
    START_X,
    START_Y,
    STARTING_STATUS,
    ANIMATION_BUFFER,
    MAIN_CHARACTER

} from './constants';
import MovingObject from './moving_object';
import Tilesheet from './tilesheet';

class Character extends MovingObject{
    constructor(object){
        super();
        let {speed,gravity,jump_height,friction,height,width,health,start_x,start_y,starting_status,animation_buffer, sprite_sheet, sprite_sheet_reversed, animation_frames} = MAIN_CHARACTER
        // debugger
        this.image = PLAYER_SPRITE_SHEET();
        this.sprite = new Tilesheet(32, 32, 32, ANIMATION_FRAMES_MC, sprite_sheet());
        this.health = health;
        this.height = height;
        this.width = width;
        this.x = start_x;
        this.y = start_y;
        this.old_x = start_x;
        this.old_y = start_y;
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.damage = false;
        this.damageCounter = 60;
        this.jumping = false;
        this.jumpingBuffer = true;
        this.swinging = false;
        this.inverted = false;
        this.oldStatus = starting_status;
        this.status = starting_status;
        this.animationFrame = 0;
        this.animation_frames = animation_frames;
        this.animationBuffer = animation_buffer;
        setKeyBinding();
        this.animationSelection = this.animationSelection.bind(this);
        this.animationStatus = this.animationStatus.bind(this);

    }

    move(){
        this.jump();
        if(ACTIVE_KEYS['a'] || ACTIVE_KEYS['ArrowLeft']){
            this.moveLeft();
        }
        if(ACTIVE_KEYS['d'] || ACTIVE_KEYS['ArrowRight']){
            this.moveRight();
        }
        if(ACTIVE_KEYS['k'] || ACTIVE_KEYS['Delete']){
            this.health = 0;
        }
        this.swing();
        this.update();
        this.setInversion(this.image.height / 2);
        this.animationStatus();
        this.animationSelection();
    }

    draw(ctx){
        // this.swinging ? this.sword.swing(ctx, this.x, this.y) : null;
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        this.sprite.draw(
            ctx, 
            this.status, 
            this.animationFrame,
            this.inverted ? this.x -25: this.x , // this is to set the hitbox smaller only on the left side while facing left
            this.y - 25, // this is to offset the size difference of the hitbox
            WIDTH + 25, // this is to make the player wider but have the hitbox small
            HEIGHT + 25, //this is to make the player taller but have the hitbox small
            this.inverted
        );
    };

    jump(){
        if(
            ACTIVE_KEYS[" "] 
            && !this.jumping 
            && this.y_velocity === 0 
            && this.jumpingBuffer){
                super.jump();
                this.jumping = true;
                this.jumpingBuffer = false;
                ACTIVE_KEYS[" "] = false;
                return;
        };
        if(
            ACTIVE_KEYS["ArrowUp"] 
            && !this.jumping 
            && this.y_velocity === 0 
            && this.jumpingBuffer){
                super.jump();
                this.jumping = true;
                this.jumpingBuffer = false;
                ACTIVE_KEYS[" "] = false;
                return;
        };
        if(
            !ACTIVE_KEYS[" "] 
            && !this.jumping 
            && this.y_velocity === 0 
            && !this.jumpingBuffer 
            && !ACTIVE_KEYS['ArrowUp']){
                this.jumpingBuffer = true
        };
        if(
            !ACTIVE_KEYS["ArrowUp"] 
            && !this.jumping 
            && this.y_velocity === 0 
            && !this.jumpingBuffer 
            && !ACTIVE_KEYS[" "]){
                this.jumpingBuffer = true
        };
    };

    swing(){
        if(ACTIVE_KEYS["Shift"]){
            this.swinging = true;
            // if(!ACTIVE_KEYS['ArrowLeft'] || !ACTIVE_KEYS['ArrowRight'] || !ACTIVE_KEYS['a'] || !ACTIVE_KEYS['d']){
            //     this.setXVelocity(0);
            // }
        } else {
            this.swinging = false;
        }
    }



    animationStatus(){
        if(this.health <= 0){
            this.updateStatus(this.animation_frames['dead']);
            return;
        }
        if(this.damage && this.damageCounter === 60){
            this.health -= 1;
            this.damageCounter -= 1
            this.updateStatus(this.animation_frames['damaged']);
            return;
        }
        if(this.damage && this.damageCounter < 60 && this.damage && this.damageCounter >= 40){
            this.damageCounter -= 1
            this.updateStatus(this.animation_frames['damaged']);
            return;
        }
        if(this.damage && this.damageCounter < 40 && this.damage > 0){
            this.damageCounter -= 1;
        }
        if(this.damage && this.damageCounter <= 0){
            this.damage = false;
            this.damageCounter = 60;
        }
        if(this.swinging){
            this.updateStatus(this.animation_frames['attack']);
            return;
        }
        // if(this.getYVelocity() > .2){
        //     this.updateStatus(this.animation_frames['fall']);
        //     return;
        // }
        if(this.jumping){
            this.updateStatus(this.animation_frames['jump']);
            return;
        }
        if(Math.floor(this.getXVelocity())){
            this.updateStatus(this.animation_frames['run']);
            return;
        }
        // if(this.getXVelocity() < 0 || Math.floor(this.getXVelocity() * -1)){
        //     this.updateStatus(this.animation_frames['run']);
        //     return;
        // }
        this.updateStatus(this.animation_frames['idle']);
    }

    animationSelection(){
        // if(this.status['status'] === 'dead'){
        //     if(this.animationBuffer > 0){
        //         this.animationBuffer -= 1;
        //     } else if( this.animationFrame === this.status.frames.length - 1){
        //         this.animationFrame = this.status.frames.length
        //     } else {
        //         if(this.animationFrame > this.status.frames.length - 2)
        //         this.animationFrame = ((this.animationFrame + 1));
        //         this.animationBuffer = 7; 
        //     }  
        // } else 
        if(this.status === this.oldStatus){
            if(this.animationBuffer > 0){
                this.animationBuffer -= 1;
            } else {
                this.animationFrame = ((this.animationFrame + 1) % (this.status.frames.length));
                this.animationBuffer = 7; 
            }
        } else {
            this.animationFrame = 0;
            this.animationBuffer = 7;
        }
        if(this.status['status'] === 'attack' && this.animationFrame === 5){
            this.swinging = false;
        };
    }



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
            case('k'):
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