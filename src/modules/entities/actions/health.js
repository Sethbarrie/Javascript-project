class Health{

    constructor(entity, parent){
        this.parent = parent;
        this.health = entity.health;
        this.damaged = false;
        this.damageCounter = entity.damageCounter;
        this.damageCounterReset = entity.damageCounter;
        this.opaque = false;
    }

    totalHealth(){return this.health;}
    
    //For use in animation module
    damagedAnimation(){return this.damaged;}
    opacity(){return this.opaque;}

    //Method checks if you were hurt and makes you invulnerable
    //for 60 increments, you gain movement after roughly 20.
    //This is so you don't touch an enemy and die in 9 frames
    damageEntity(damage, stepTimer){
        if(damage){
            if(this.damageCounter === this.damageCounterReset){
                this.health -= damage;
                this.damaged = true;
                this.damageCounter --;
                if(this.health <= 0){
                    this.parent.setAnimationFrame(0);
                }
                return;                
            }
        }
        // if(!stepTimer){
        //     return;
        // }
        if(this.damageCounter === this.damageCounterReset){
            return;
        }
        if(
            this.damageCounter < this.damageCounterReset 
            && this.damageCounter > Math.floor(this.damageCounterReset * .66)
        ){
            this.damageCounter --;
            return;
        }
        if( 
            this.damageCounter > 0
            && this.damageCounter < Math.ceil(this.damageCounterReset * .66)
        ){
            this.damageCounter --;
            this.damaged = false;
            this.opaque = true;
            return;
        }
        if(this.damageCounter <= 0){
            this.damageCounter = this.damageCounterReset;
            this.damaged = false;
            this.opaque = false;
            return;
        }
    }

    deathKey(){
        if(this.parent.checkActiveKeys('k')){
            this.health = 0;
        }
    }
}

export default Health;