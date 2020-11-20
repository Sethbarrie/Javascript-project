class Jump{

    constructor(entity, parent){
        this.jumping = false;
        this.jumpingBuffer = true;
        this.jumpHeight = entity.jumpHeight;
        this.shortHopTimer = entity.shortHopTimer;
        this.phaseThroughPlatform = false;
        this.phaseTimer = 5;
        this.parent = parent;
    }

    jumpingAnimation(){return this.jumping;}

    update(){
        // if(this.jumping){
        //     return;
        // }
        this.setCharacterJump();
        // if(this.jumping){
        //     return;
        // }
        // this.fallThroughPlatform();
    }

    setCharacterJump(){
        // if(this.jumping || this.parent.positioning.getYVelocity() !== 0){
        //     return;
        // }
        if(this.jumpingBuffer){
            if(this.parent.checkActiveKeys(' ') || this.parent.checkActiveKeys('ArrowUp')){
                this.parent.positioning.setYVelocity(this.parent.positioning.getYVelocity() - this.jumpHeight)                
                this.jumping = true;
                this.jumpingBuffer = false;
                this.parent.setActiveKeys(' ', false);
                this.parent.setActiveKeys('ArrowUp', false);
                return;
            }
        } else {
            if(!this.parent.checkActiveKeys(' ') && !this.parent.checkActiveKeys('ArrowUp')){
                this.jumpingBuffer = true;
            }
        };
    };

    bonk(){this.jumping = false}

    setEnemyJump(){

    }

    fallThroughPlatform(){
        if(this.phaseThroughPlatform){
            this.phaseTimer --;
        }
        if(this.phaseTimer === 0){
            this.phaseThroughPlatform = false;
            this.phaseTimer = 5;            
        }
        if(this.parent.checkActiveKeys('s') && this.phaseThroughPlatform === false){
            this.parent.setActiveKeys('s', false);
            this.phaseThroughPlatform = true;
        }
    }

}

export default Jump;