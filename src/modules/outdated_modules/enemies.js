import MovingObject from "./moving_object";
import {
    SKELETON_SPRITE_SHEET,
    ANIMATION_FRAMES_SKELETON
} from './constants';
import Tilesheet from "./tilesheet";

class Enemy extends MovingObject{
    constructor(health){
        super()
        this.image = SKELETON_SPRITE_SHEET();
        this.sprite = new Tilesheet(43 , 43, 0, ANIMATION_FRAMES_SKELETON, this.image);
        this.health = health;
        this.height = 100;
        this.width = 80;
        this.x = 600;
        this.y = 635;
        this.old_x = 600;
        this.old_y = 635;
        this.characterXOffset = 35;
        this.characterYOffset = 25;
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.swinging = false;
        this.inverted = 109;
        this.oldStatus = ANIMATION_FRAMES_SKELETON['attack'];
        this.status = ANIMATION_FRAMES_SKELETON['attack'];
        this.animationFrame = 0;
        this.animationBuffer = 10;
        this.animationBufferReset = 7;
        this.delete = false;
    }

    draw(ctx){
        if(this.status.status === 'dead'){
            this.dead(ctx)
        } else {
        this.animationSelection();
        this.sprite.draw(
            ctx,
            this.status,
            this.animationFrame,
            this.x,
            this.status.status === 'attack' ? this.y - 25 :this.y,
            this.status.status === 'attack' ? this.width + 35: this.width,
            this.status.status === 'attack' ? this.height + 25: this.height,
            this.inverted
        )
        }

    }

    
    
    animationSelection(){
        if(this.health <= 0){
            this.oldStatus = ANIMATION_FRAMES_SKELETON['dead'];
            this.status = ANIMATION_FRAMES_SKELETON['dead'];
            this.animationFrame = 0;
            this.animationBuffer = 7;
        }
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
        if(this.status['status'] === 'attack' && this.animationFrame === 17){
            this.swinging = false;
        };
    }
}

export default Enemy