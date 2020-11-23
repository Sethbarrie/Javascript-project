class Animation{

    constructor(entity, parent){
        this.animationFrames = entity.animation_frames;
        this.status = entity.animation_frames[entity.starting_status];
        this.oldStatus = entity.animation_frames[entity.starting_status];
        // this.status = entity.animation_frames['attack'];
        // this.oldStatus = entity.animation_frames['attack'];
        this.animationLength = entity.animation_frames[entity.starting_status].frames.length;
        this.animationFrame = 0;
        this.animationBuffer = entity.animation_buffer;
        this.animationBufferReset = entity.animation_buffer;
        this.parent = parent;
    }

    currentAnimationFrame(){return this.animationFrame;}
    currentStatus(){return this.status;}
    endOfAnimation(){return this.animationFrame === this.animationLength - 1}

    setStatus(newStatus){this.status = this.animationFrames[newStatus];}
    setOldStatus(){this.oldStatus = this.status;}
    setAnimationLength(){this.animationLength = this.status.frames.length}

    animationStatus(){
        if(this.parent.totalHealth() <= 0){
            this.setOldStatus(this.currentStatus());
            this.setStatus('dead');
            this.setAnimationLength();
            return;
        }
        if(this.parent.damagedAnimation()){
            this.setOldStatus(this.currentStatus());
            this.setStatus('damaged');
            this.setAnimationLength();
            return;
        }
        if(this.parent.swingingAnimation()){
            this.setOldStatus(this.currentStatus());
            this.setStatus('attack');
            this.setAnimationLength();
            return;
        }
        if(this.parent.jumpingAnimation()){
            this.setOldStatus(this.currentStatus());
            this.setStatus('jump');
            this.setAnimationLength();
            return;
        }
        if(this.parent.movingAnimation()){
            this.setOldStatus(this.currentStatus());
            this.setStatus('run');
            this.setAnimationLength();
            return;
        }
        this.setOldStatus(this.currentStatus());
        this.setStatus('idle');
        this.setAnimationLength();
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
        return this.animationFrame;
    }

    deadAnimation(){
        if(this.animationFrame === this.status.frames.length - 1)
            return this.animationFrame;
        if(this.animationBuffer > 0){
            this.animationBuffer -= 1;
        } else {
            this.animationFrame = ((this.animationFrame + 1));
            this.animationBuffer = this.animationBufferReset; 
        }
        return this.animationFrame;
    }

    update(){
        this.animationStatus();
        if(this.status.status === 'dead'){
            return this.deadAnimation();
        } else {
            return this.animationSelection();
        }
    }
}

export default Animation;