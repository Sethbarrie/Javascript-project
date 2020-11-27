class Animation{

    constructor(entity, parent){
        this.animationFrames = entity.animation_frames;
        this.status = entity.animation_frames[entity.starting_status];
        this.oldStatus = entity.animation_frames[entity.starting_status];
        this.animationLength = entity.animation_frames[entity.starting_status].frames.length;
        this.animationFrame = 0;
        this.animationBuffer = entity.animation_buffer;
        this.animationBufferReset = entity.animation_buffer;
        this.parent = parent;
    }

    currentAnimationFrame(){return this.animationFrame;}
    currentAnimationBuffer(){return this.animationBuffer;}
    setAnimationFrame(frame){this.animationFrame = frame;}
    currentStatus(){return this.status;}
    endOfAnimation(){return (
        (this.animationFrame === this.animationLength - 1) 
        && (this.animationBuffer <= 1)
    )}

    setStatus(newStatus){this.status = this.animationFrames[newStatus];}
    setOldStatus(){this.oldStatus = this.status;}
    setAnimationLength(){this.animationLength = this.status.frames.length}
    updateStatus(status){
        this.setOldStatus(this.currentStatus());
        this.setStatus(status);
        this.setAnimationLength();       
    }

    animationStatus(){
        if(this.parent.constructor.name === 'Character'){
            if(this.parent.totalHealth() <= 0){
                this.updateStatus('dead');
                return;
            }
            if(this.parent.damagedAnimation()){
                this.updateStatus('damaged');
                return;
            }
            if(this.parent.swingingAnimation()){
                this.updateStatus('attack');
                return;
            }
            if(this.parent.jumpingAnimation()){
                this.updateStatus('jump');
                return;
            }
            if(this.parent.movingAnimation()){
                this.updateStatus('run');
                return;
            }
            this.updateStatus('idle');
            return;
        }
        if(this.parent.constructor.name === 'Enemy'){
            if(this.parent.totalHealth() <= 0){
                this.updateStatus('dead');
                return;
            }
            if(this.parent.swingingAnimation()){
                this.updateStatus('attack');
                return;
            }
            this.updateStatus('run');
            return;
        }
    }

    
    animationSelection(timeStep){
        if(this.status === this.oldStatus){
            if(this.animationBuffer > 0){
                this.animationBuffer -= 1;
            } else {
                this.setAnimationFrame((this.animationFrame + 1) % (this.status.frames.length));
                this.animationBuffer = this.animationBufferReset; 
            }
        } else {
            this.setAnimationFrame(0);
            this.animationBuffer = this.animationBufferReset;
        }
        return this.animationFrame;
    }

    deadAnimation(timeStep){
        if(this.animationFrame >= this.status.frames.length - 1)
            return this.animationFrame;
        if(this.animationBuffer > 0){
            this.animationBuffer -= 1;
        } else {
            this.setAnimationFrame((this.animationFrame + 1));
            this.animationBuffer = this.animationBufferReset; 
        }
        return this.animationFrame;
    }

    update(timeStep){
        this.animationStatus();
        if(this.status.status === 'dead'){
            return this.deadAnimation(timeStep);
        } else {
            return this.animationSelection(timeStep);
        }
    }
}

export default Animation;