import {
    SPEED,
    GRAVITY,
    JUMP_HEIGHT,
    FRICTION
} from './constants';


class MovingObject{

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

    getHeight(){return this.height}
    getWidth(){return this.width}

    setInversion(offset){
        if(this.getXVelocity() === 0){
            return;
        }
        if(this.getXVelocity() < 0){
            this.inverted = offset;
        } else {
            this.inverted = 0;
        }
    }

    getXOffset(){return this.characterXOffset}
    getYOffset(){return this.characterYOffset}

    getSwordTop(){return this.y + this.height};
    getSwordBottom(){return this.y};
    getSwordLeft(){
        if(this.inverted){
            return this.x;
        } else {
            return this.x -16;
        }
    };
    getSwordRight(){
        if(this.inverted){
            return this.x + this.width - 16;
        } else {
            return this.x + this.width;
        }
    };

    swordActive(){
        return this.status['status'] === 'attack';
    }

    swordHitbox(){
        if(this.inverted){
            return [this.getTop(), this.getLeft() - this.offSet]
        } else {

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

    damageEntity(){
        this.status = this.status['damaged'];
    }

    damageStep(damage){
        if(
            this.damage 
            && this.damageCounter === this.damageCounterReset){
                this.health -= damage;
                this.damageCounter --;
                this.updateStatus(this.animation_frames['damaged']);
                return;
        }
        if(
            this.damage 
            && this.damageCounter < this.damageCounterReset  
            && this.damageCounter >= Math.floor(this.damageCounterReset * .66)){
                this.damageCounter --;
                this.updateStatus(this.animation_frames['damaged']);
                return;
        }
        if(
            this.damage 
            && this.damageCounter < Math.floor(this.damageCounterReset * .66) 
            && this.damage > 0){
                this.damageCounter --;
        }
        if(this.damage && this.damageCounter <= 0){
            this.damage = false;
            this.damageCounter = this.damageCounterReset;
        }
    }
    
    dead(ctx){
        if(this.delete === true){return}
        if(this.animationBuffer > 0){
            this.animationBuffer -= 1;
            this.sprite.draw(
                ctx,
                this.status,
                this.animationFrame,
                this.x,
                this.y,
                this.width + this.getXOffset(),
                this.height + this.getYOffset(),
                this.inverted
            )        } else {
            if(this.animationFrame === this.status.frames.length - 1){
                this.delete = true;
                this.x = 0;
                this.y = 0;
                this.width = 0;
                this.height = 0;
            }
            this.animationFrame = ((this.animationFrame + 1));
            this.animationBuffer = this.animationBufferReset;
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
    }

    updateStatus(newStatus){
        this.oldStatus = this.status;
        this.status = newStatus;
    }

}

export default MovingObject;