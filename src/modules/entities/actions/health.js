class Health{

    constructor(entity){
        this.health = entity.health;
        this.damaged = false;
        this.damageCounter = entity.damageCounter;
        this.damageCounterReset = entity.damageCounter;
    }

    totalHealth(){return this.health;}
    damagedAnimation(){return this.damaged;}

    damageEntity(damage){
        if(this.damage){
            if(this.damageCounter === this.damageCounterReset){
                this.health -= damage;
                this.damaged = true;
                this.damageCounter --;
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
                && this.damageCounter < Math.floor(this.damageCounterReset * .66)
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
}

export default Health;