class Weapon{
    constructor(entity, parent){
        this.weaponWidth = entity.weapon_width;
        this.weaponHeight = entity.weapon_height;
        this.activeSwing = false;
        this.activeHitbox = false;
        this.hitboxFrames = entity.animation_frames.attack.hitboxFrames;
        this.damage = entity.damage;
        this.enemyCollision = false;
        this.parent = parent;
    };

    updateCharacter(){
        this.swing();
        // this.damageFrames();
    }

    
    updateEnemy(){
        this.activeSwing = (
            this.parent.spotPlayer() 
            || (this.activeSwing && !this.parent.endOfAnimation()
            )
        ) 
        if(this.activeSwing){
            this.damageFrames();
        } else {
            this.activeHitbox = false;
        }
    }

    getWeaponWidth(){return this.weaponWidth}
    getWeaponHeight(){return this.weaponHeight}
    swingingAnimation(){return !!this.activeSwing}
    hitboxActive(){return !!this.activeHitbox}
    weaponEnemyCollision(){return this.enemyCollision}
    
    calcDamage(){return this.damage}
    
    // setSwinging(newState){this.activeSwing = newState;}

    swing(){{
        this.activeSwing = (
            // This starts the swing if the player presses shift
            this.parent.checkActiveKeys('Shift') === true
            // This plays out the animation if shift is not pressed
            || (this.activeSwing && !this.parent.endOfAnimation())
        )
        if(this.activeSwing){
            this.damageFrames();
            if(this.parent.endOfAnimation()){
                //This ends the swing if the end of the animation hits
                this.activeSwing = false;
            }
        } else {
            this.activeHitbox = false;
        }
    }}

    debugMode(ctx){
        if(this.hitboxActive()){
            let topW = this.parent.getTop();
            let leftW;
            if(!this.parent.getInversion()){
                let characterRight = this.parent.getRight();
                leftW = characterRight;
            } else {
                let characterLeft = this.parent.getLeft();
                leftW = characterLeft - this.getWeaponWidth();
            }

            ctx.beginPath();
            ctx.rect(
                leftW,
                topW,
                this.getWeaponWidth(),
                this.getWeaponHeight());
            ctx.lineWidth = '1';
            ctx.fillStyle = 'green';
            ctx.fill();
        }
    }

    damageFrames(){
        this.activeHitbox = (
            this.activeSwing 
            && this.hitboxFrames.includes(this.parent.currentAnimationFrame())
        )
    }

    weaponCollision(entity){
        let inverted = this.parent.getInversion();
        let attackerTop = this.parent.getTop();
        let attackerLeft = this.parent.getLeft();
        let attackerRight = this.parent.getRight();
        let opponentTop = entity.getTop();
        let opponentLeft = entity.getLeft();
        let opponentRight = entity.getRight();
        let opponentBottom = entity.getBottom();
        if(
            ((opponentTop > attackerTop && opponentTop < (attackerTop + this.weaponHeight))
            ||(opponentBottom > attackerTop && opponentBottom < (attackerTop + this.weaponHeight))
            ||(opponentTop < attackerTop && opponentBottom > attackerTop)
            ||(opponentTop < attackerTop + this.weaponHeight && opponentBottom > attackerTop + this.weaponHeight)
            )
        ){
            if(inverted){
                attackerRight = attackerLeft;
                attackerLeft = attackerLeft - this.weaponWidth;
            } else {
                attackerLeft = attackerRight;
                attackerRight = attackerRight + this.weaponWidth;
            }
            if((opponentLeft > (attackerLeft)  && opponentLeft < (attackerRight))
            || (opponentRight > (attackerLeft) && opponentRight < attackerRight)
            ){
                if(this.activeHitbox){
                    entity.damageEntity(this.damage);
                }
            }
        }
    }

}

export default Weapon;