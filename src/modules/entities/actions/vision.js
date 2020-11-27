class Vision{

    constructor(entity,parent){
        this.parent = parent;
        this.visionFront = entity.visionFront;
        this.visionBack = entity.visionBack;
        this.spotted = false;
        this.pivotToSwing = false;
    }

    
    spottedPlayer(status){this.spotted = status;}
    spotPlayer(){return this.spotted;}
    turnToSwing(){return this.pivotToSwing;}

    playerInSight(entity){
        let inverted = this.parent.getInversion();
        let entityTop = this.parent.getTop();
        let entityLeft = this.parent.getLeft();
        let entityRight = this.parent.getRight();
        let entityBottom = this.parent.getBottom();
        let visibleCharacterTop = entity.getTop();
        let visibleCharacterLeft = entity.getLeft();
        let visibleCharacterRight = entity.getRight();
        let visibleCharacterBottom = entity.getBottom();
        if(
            ((visibleCharacterTop > entityTop && visibleCharacterTop < entityBottom)
            ||(visibleCharacterBottom > entityTop && visibleCharacterBottom < entityBottom))
            && 
            ((visibleCharacterLeft > (entityLeft - this.visionBack)  && visibleCharacterLeft < (entityRight + this.visionFront))
            ||(visibleCharacterRight > entityLeft && visibleCharacterRight < entityRight))
        ){
            this.spotted = true;
            let left = entityLeft > visibleCharacterLeft;
            if(
                inverted 
                && !left 
                && !this.pivotToSwing 
                && (!this.parent.swingingAnimation() || 
                (this.parent.endOfAnimation() &&this.parent.currentAnimationBuffer() <= 1))){
                    this.pivotToSwing = true;
            }
            else if(
                !inverted 
                && left 
                && !this.pivotToSwing 
                && (!this.parent.swingingAnimation() 
                || (this.parent.endOfAnimation()
                && this.parent.currentAnimationBuffer() <= 1)
                )
            ){
                this.pivotToSwing = true;
            } else {
                this.pivotToSwing = false;
            }
        } else {
            this.spotted = false;
            this.pivotToSwing = false;
        }
    }

}

export default Vision;