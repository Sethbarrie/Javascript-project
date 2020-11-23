class Positioner{

    constructor(start_x, start_y, width, height, characterOffset){
        this.height = height;
        this.width = width;
        this.x = start_x;
        this.y = start_y;
        this.old_x = start_x;
        this.old_y = start_y;
        this.characterOffset = characterOffset;
        this.x_velocity = 0;
        this.y_velocity = 0;
    }

    
    getHeight(){return this.height}
    getWidth(){return this.width}

    getTop(){return this.y};
    getBottom(){return this.y + this.height};
    getLeft(){return this.x};
    getRight(){return this.x + this.width};
    
    getOldTop(){return this.old_y};
    getOldBottom(){return this.old_y + this.height};
    getOldLeft(){return this.old_x};
    getOldRight(){return this.old_x + this.width};
    
    getXVelocity(){return this.x_velocity};
    getYVelocity(){return this.y_velocity};
     
    getOffset(){return this.characterOffset};
    
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

}

export default Positioner;