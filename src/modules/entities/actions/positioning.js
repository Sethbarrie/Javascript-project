class Positioning{

    constructor(entity, parent){
        this.height = entity.height;
        this.width = entity.width;
        this.speed = entity.speed;
        this.friction = entity.friction;
        this.gravity = entity.gravity;
        this.x = entity.start_x;
        this.y = entity.start_y;
        this.old_x = entity.start_x;
        this.old_y = entity.start_y;
        this.characterXOffset = entity.characterXOffset;
        this.characterYOffset = entity.characterYOffset;
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.inverted = 0;
        this.parent = parent;
    }

    
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

    getInversion(){return !!this.inverted;}
    
    setInversion(){
        if(this.getXVelocity() === 0){
            return;
        }
        if(this.getXVelocity() < 0){
            this.inverted = 16;
        } else {
            this.inverted = 0;
        }
    }

    getXOffset(){return this.characterXOffset}
    getYOffset(){return this.characterYOffset}

    update(
        // keyA,keyArrowLeft,keyD,keyArrowRight
        ){
        this.move(
            // keyA,keyArrowLeft,keyD,keyArrowRight
            );
        this.setYVelocity((this.getYVelocity() + this.gravity) * this.friction);
        this.setXVelocity(this.getXVelocity() * this.friction);
        this.setOldLeft(this.getLeft());
        this.setOldTop(this.getTop());
        this.setTop(this.getTop() + this.getYVelocity());
        this.setLeft(this.getLeft() + this.getXVelocity());
    }

    move(
        // keyA,keyArrowLeft,keyD,keyArrowRight
        ){
        this.setXVelocity(
            this.getXVelocity() + (this.speed * this.keyPress(
                // keyA,keyArrowLeft,keyD,keyArrowRight
                ))
        )
    }
    
    keyPress(
        // keyA,keyArrowLeft,keyD,keyArrowRight
        ){

        let keyA = this.parent.checkActiveKeys('a');
        let keyArrowLeft = this.parent.checkActiveKeys('ArrowLeft');
        
        let keyD = this.parent.checkActiveKeys('d');
        let keyArrowRight = this.parent.checkActiveKeys('ArrowRight');

        


        let returnValue = 0;
        if(keyD || keyArrowRight){
            returnValue += 1;
        }
        if(keyA || keyArrowLeft){
            returnValue -= 1;
        }
        return returnValue;
    }
    
    movingAnimation(){return !!this.getXVelocity();}

}

export default Positioning;