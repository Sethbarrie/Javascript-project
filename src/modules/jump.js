

class Jump{

    constructor(jumpHeight, shortHopTime){
        super();
        this.jumpHeight = jumpHeight;
        this.shortHopTime = shortHopTime;
        this.shortHopTimeReset = shortHopTime;
        this.jumping = false;
        this.jumpingBuffer = true;
    }

    
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
}