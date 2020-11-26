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
        this.inverted = false;
        this.parent = parent;
        this.enemyPivot = this.enemyPivot.bind(this);
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
            this.inverted = true;
        } else {
            this.inverted = false;
        }
    }

    getXOffset(){return this.characterXOffset}
    getYOffset(){return this.characterYOffset}

    updateCharacter(timeStep){
        this.moveCharacter();
        this.setYVelocity((this.getYVelocity() + this.gravity) * this.friction);
        this.setXVelocity(this.getXVelocity() * this.friction);
        this.setOldLeft(this.getLeft());
        this.setOldTop(this.getTop());
        this.setTop(this.getTop() + this.getYVelocity());
        this.setLeft(this.getLeft() + this.getXVelocity());
        this.setInversion()
    }

    updateEnemy(timeStep){
        this.moveEnemy();
        this.setYVelocity((this.getYVelocity() + this.gravity) * this.friction);
        this.setXVelocity( 
            this.parent.currentStatus().status === 'run' 
            ?(this.getXVelocity() * this.friction)
            : 0.01
        );
        this.setOldLeft(this.getLeft());
        this.setOldTop(this.getTop());
        this.setTop(this.getTop() + this.getYVelocity());
        this.setLeft(this.getLeft() + this.getXVelocity());
    }

    moveCharacter(){
        this.setXVelocity(this.getXVelocity() + (this.speed * this.keyPress()))
    }

    moveEnemy(){
        this.inverted = this.enemyPivot() ? !this.inverted : this.inverted;
        let direction = this.inverted ? -.5 : .5;
        this.setXVelocity(this.getXVelocity() + (this.speed * direction))
    }

    enemyPivot(){
        let pivot = 0;
        if(this.parent.turnToSwing()){
            pivot += 1;
        }
        if(!this.getXVelocity()){
            pivot += 1;
        }
        return !!(pivot % 2);
    }
    
    keyPress(){

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

    debugMode(ctx){
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(this.getLeft(), this.getTop(), this.width, this.height);
        ctx.stroke(); 
        // let Top = Math.floor(this.getTop() / 32);
        // let Left = Math.floor(this.getLeft() / 32);
        // let Middle = Math.floor((this.getTop() + 32) / 32);
        // let Right = Math.floor((this.getRight()) / 32);
        // let Bottom = Math.floor((this.getBottom()) / 32);

        // let characterTop = Top * 32;
        // let characterLeft = Left * 32;
        // let characterMiddle = Middle * 32;
        // let characterRight = Right * 32;
        // let characterBottom = Bottom * 32;
            
        // //Top
        // ctx.beginPath();
        // ctx.rect(
        //     characterRight,
        //     characterTop,
        //      32,32);
        // ctx.lineWidth = '3';
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.rect(
        //     characterLeft,
        //     characterTop,
        //      32,32);
        // ctx.lineWidth = '3';
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();

        // //Middle
        // ctx.beginPath();
        // ctx.rect(
        //     characterLeft, 
        //     characterMiddle, 
        //     32,32);
        //     ctx.lineWidth = '3';
        //     ctx.strokeStyle = 'blue';
        //     ctx.stroke();
            
        // ctx.beginPath();
        // ctx.rect(
        //     characterRight, 
        //     characterMiddle, 
        //     32,32);
        // ctx.lineWidth = '3';
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();
                
        // //Bottom
        // ctx.beginPath();
        // ctx.rect(
        //     characterRight, 
        //     characterBottom, 
        //     32,32);
        // ctx.lineWidth = '3';
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.rect(
        //     characterLeft, 
        //     characterBottom, 
        //     32,32);
        // ctx.lineWidth = '3';
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();
    }

}

export default Positioning;