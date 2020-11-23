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

    update(){
        this.swing();
        this.damageFrames();
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
    }}

    damageFrames(){
        this.activeHitbox = (
            this.activeSwing 
            && this.hitboxFrames.includes(this.parent.currentAnimationFrame())
        )
    }
   
    weaponCollision(x,y, width, height){
        debugger
        let topW = this.parent.getTop();
        let botW = topW + this.weaponHeight;
        let leftW;
        let rightW;
        if(!this.parent.getInversion()){
            let characterRight = this.parent.getRight();
            leftW = characterRight - this.weaponWidth;
            rightW = characterRight;
        } else {
            let characterLeft = this.parent.getLeft();
            leftW = characterLeft;
            rightW = characterLeft + this.weaponWidth;
        }
        let xCollision = ((leftW > x && leftW < x + width) || (rightW > x && rightW < x + width));
        let yCollision = ((botW > y && botW < y + height) || (topW > y && topW < y + height));
        let collision = (xCollision && yCollision);
        this.enemyCollision = collision;
        return collision;
    }

        // enemyCollision(mainCharacter, enemy){
    //     if(
    //         mainCharacter.getLeft() < enemy.getRight() && enemy.getRight() < mainCharacter.getRight() ||
    //         mainCharacter.getRight() > enemy.getLeft() && enemy.getLeft() > mainCharacter.getLeft()
    //     ){  
    //         if(
    //             mainCharacter.getTop() < enemy.getBottom() && enemy.getBottom() < mainCharacter.getBottom() ||
    //             mainCharacter.getBottom() < enemy.getTop() && enemy.getTop() > mainCharacter.getTop()
    //         ){
    //             return true;
    //         } else{
    //             return false;
    //         }
    //     } else {
    //         return false;
    //     }
    // }


}

export default Weapon;