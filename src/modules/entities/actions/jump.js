class Jump{

    constructor(entity, parent){
        this.jumping = false;
        this.jumpingBuffer = true;
        this.jumpHeight = entity.jump_height;
        this.shortHopTimer = entity.shortHopTimer;
        this.phaseThroughPlatform = false;
        this.phaseTimer = 5;
        this.parent = parent;
    }

    //For use in animation module
    jumpingAnimation(){return this.jumping;}

    //checks to not run through methods if unnecessary
    updateCharacter(timeStep){
        if(this.jumping){
            return;
        }
        this.setCharacterJump(timeStep);
        if(this.jumping){
            return;
        }
        this.fallThroughPlatform(timeStep);
    }

    updateEnemy(timeStep){
        // if(this.jumping){
        //     return;
        // }
        // this.setCharacterJump(timeStep);
        // if(this.jumping){
        //     return;
        // }
        // this.fallThroughPlatform(timeStep);
        return;
    }

    //jump logic. you can't jump when jumping, and the jump buffer makes it to where you
    //need to let go of the button to jump again
    setCharacterJump(timeStep){
        if(this.jumping || this.parent.positioning.getYVelocity() !== 0){
            return;
        }
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

    //bonk
    bonk(){this.jumping = false}

    setEnemyJump(){

    }

    fallThroughPlatform(timeStep){
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