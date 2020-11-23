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
import {setKeyBinding} from './controls';
import MovingObject from './moving_object';
import Positioner from './positioner';
import Tilesheet from './tilesheet';

class Character extends MovingObject{
    constructor(object){
        super();
        let {
            height
            ,width
            ,characterOffset
            ,start_x
            ,start_y
            ,health
            ,characterXOffset
            ,characterYOffset
            ,starting_status
            ,animation_buffer
            ,sprite_sheet
            ,animation_frames
        } = object
        this.image = PLAYER_SPRITE_SHEET();
        setKeyBinding();
        //sprite and positioning
        this.sprite = new Tilesheet(32, 32, 32, animation_frames, sprite_sheet());
        this.position = new Positioner(start_x, start_y, width, height, characterXOffset, characterYOffset);
        // this.jump = new Jump(jump_height,);
        
        this.height = height;
        this.width = width;
        this.x = start_x;
        this.y = start_y;
        this.old_x = start_x;
        this.old_y = start_y;
        this.characterXOffset = characterXOffset;
        this.characterYOffset = characterYOffset;        
        this.x_velocity = 0;
        this.y_velocity = 0;
        
        
        //status trackers for character
        this.health = health;
        this.damage = false;
        this.damageCounter = 60;
        this.damageCounterReset = 60;
        this.jumping = false;
        this.jumpingBuffer = true;
        this.swinging = false;
        this.inverted = false;
        this.oldStatus = starting_status;
        this.status = starting_status;
        //frame trackers for character
        this.animationFrame = 0;
        this.animation_frames = animation_frames;
        this.animationBuffer = animation_buffer;
        this.delete = false;
        this.animationSelection = this.animationSelection.bind(this);
        this.animationStatus = this.animationStatus.bind(this);

    }

    move(){
        if(this.status['status'] !== 'dead'){
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
    }

    draw(ctx){
        if(this.status.status === 'dead'){
            this.dead(ctx)
        } else {
            this.sprite.draw(
                ctx, 
                this.status, 
                this.animationFrame,
                this.inverted ? this.getLeft() - this.characterXOffset: this.getLeft() , // this is to set the hitbox smaller only on the left side while facing left
                this.getTop() - this.characterYOffset, // this is to offset the size difference of the hitbox
                this.width + this.characterXOffset, // this is to make the player wider but have the hitbox small
                this.height + this.characterYOffset, //this is to make the player taller but have the hitbox small
                this.inverted
            );
            // this.sprite.draw(
            //     ctx, 
            //     this.status, 
            //     this.animationFrame,
            //     this.inverted // this is to set the hitbox smaller only on the left side while facing left
                // ? this.getLeft() - this.characterXOffset
                // : this.getLeft() , 
            //     this.getTop() - this.characterYOffset, // this is to offset the size difference of the hitbox
            //     this.getWidth() + this.characterXOffset, // this is to make the player wider but have the hitbox small
            //     this.getHeight() + this.characterYOffset, //this is to make the player taller but have the hitbox small
            //     this.inverted
            // );
        }
    };

    jump(){
        if(
            ACTIVE_KEYS[" "] 
            && !this.jumping 
            && this.getYVelocity() === 0 
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
            && this.getYVelocity() === 0 
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
            && this.getYVelocity() === 0 
            && !this.jumpingBuffer 
            && !ACTIVE_KEYS['ArrowUp']){
                this.jumpingBuffer = true
        };
        if(
            !ACTIVE_KEYS["ArrowUp"] 
            && !this.jumping 
            && this.getYVelocity() === 0 
            && !this.jumpingBuffer 
            && !ACTIVE_KEYS[" "]){
                this.jumpingBuffer = true
        };
    };

    swing(){
        if(ACTIVE_KEYS["Shift"]){
            this.swinging = true;
        }
    }



    animationStatus(){
        if(this.health <= 0){
            this.updateStatus(this.animation_frames['dead']);
            return;
        }

        // if(this.damage && this.damageCounter === 60){
        //     this.health -= 1;
        //     this.damageCounter -= 1
        //     this.updateStatus(this.animation_frames['damaged']);
        //     return;
        // }
        // if(this.damage && this.damageCounter < 60 && this.damage && this.damageCounter >= 40){
        //     this.damageCounter -= 1
        //     this.updateStatus(this.animation_frames['damaged']);
        //     return;
        // }
        // if(this.damage && this.damageCounter < 40 && this.damage > 0){
        //     this.damageCounter -= 1;
        // }
        // if(this.damage && this.damageCounter <= 0){
        //     this.damage = false;
        //     this.damageCounter = 60;
        // }
        if(this.swinging){
            this.updateStatus(this.animation_frames['attack']);
            return;
        }
        if(this.jumping){
            this.updateStatus(this.animation_frames['jump']);
            return;
        }
        if(Math.floor(this.getXVelocity())){
            this.updateStatus(this.animation_frames['run']);
            return;
        }
        this.updateStatus(this.animation_frames['idle']);
    }

    animationSelection(){
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

    // this.animationFrame = 0;
    // this.animation_frames = animation_frames;
    // this.animationBuffer = animation_buffer;
    // this.delete = false;
    // this.animationSelection = this.animationSelection.bind(this);
    // this.animationStatus = this.animationStatus.bind(this);


}


export default Character;