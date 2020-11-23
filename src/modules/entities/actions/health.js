class Health{

    constructor(entity){
        this.health = entity.health;
        this.damaged = false;
        this.damageCounter = entity.damageCounter;
        this.damageCounterReset = entity.damageCounter;
    }

    totalHealth(){return this.health;}
    
    //For use in animation module
    damagedAnimation(){return this.damaged;}

    //Method checks if you were hurt and makes you invulnerable
    //for 60 increments, you gain movement after roughly 20.
    //This is so you don't touch an enemy and die in 9 frames
    damageEntity(damage){
        if(damage){
            if(this.damageCounter === this.damageCounterReset){
                this.health -= damage;
                this.damaged = true;
                this.damageCounter --;
                return;                
            }
        }
        debugger;
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
            this.damaged === false;
            return;
        }
        if(this.damageCounter <= 0){
            this.damageCounter = this.damageCounterReset;
            this.damaged = false;
            return;
        }
        
    }
}

export default Health;