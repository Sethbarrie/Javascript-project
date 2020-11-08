import MovingObject from "./moving_object";
import {
    SKELETON_WALK_SPRITE_SHEET,
    SKELETON_ATTACK_SPRITE_SHEET,
    SKELETON_DEAD_SPRITE_SHEET,
    ANIMATION_FRAMES_SKELETON
} from './constants';
import Tilesheet from "./tilesheet";

class Enemy extends MovingObject{
    constructor(health){
        super()
        this.health = health;
        this.image = SKELETON_ATTACK_SPRITE_SHEET();
        this.sprite = new Tilesheet(43 , 43, 0, ANIMATION_FRAMES_SKELETON, this.image, this.image);
        this.health = 1;
        this.height = 120;
        this.width = 120;
        this.x = 600;
        this.y = 635;
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.swinging = false;
        this.inverted = false;
        this.oldStatus = ANIMATION_FRAMES_SKELETON['attack'];
        this.status = ANIMATION_FRAMES_SKELETON['attack'];
        this.animationFrame = 0;
        this.animationBuffer = 10;
        this.animationBufferReset = 7;
    }

    draw(ctx){
        debugger
        this.animationSelection();
        this.sprite.draw(
            ctx,
            this.status,
            this.animationFrame,
            this.x,
            this.y,
            this.width,
            this.height,
            this.inverted
        )
    }

    
    animationSelection(){
        if(this.status === this.oldStatus){
            if(this.animationBuffer > 0){
                this.animationBuffer -= 1;
            } else {
                this.animationFrame = ((this.animationFrame + 1) % (this.status.frames.length));
                this.animationBuffer = this.animationBufferReset; 
            }
        } else {
            this.animationFrame = 0;
            this.animationBuffer = this.animationBufferReset;
        }
        // if(this.status['status'] === 'attack' && this.animationFrame === 5){
        //     this.swinging = false;
        // };
    }

}

export default Enemy