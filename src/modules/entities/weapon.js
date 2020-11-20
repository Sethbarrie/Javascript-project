class Weapon{
    constructor(entity, parent){
        this.weaponWidth = entity.weapon_width;
        this.weaponHeight = entity.weapon_height;
        // this.swingTime = entity.animation_frames.attack.frames.length;
        this.activeSwing = false;
        this.activeHitbox = false;
        this.HitboxFrames = entity.animation_frames.attack.hitboxFrames;
        this.damage = entity.damage;
        this.enemyCollision = false;
        this.parent = parent;
    };

    swingingAnimation(){return !!this.activeSwing}
    damageFrames(){this.activeHitbox = this.hitboxFrames.includes(this.parent.getAnimationFrame())}
   
    weaponEnemyCollision(){return this.enemyCollision}
    swinging(){this.activeSwing = this.parent.checkActiveKeys('Shift') === true}
    hitboxActive(){return !!this.activeHitbox}
    weaponCollision(x,y){
        let topW = this.parent.getTop();
        let botW = topW + this.weaponHeight;
        let leftW;
        let rightW;
        if(!this.parent.getInversion()){
            let characterRight = this.parent.getRight();
            leftW = characterRight - this.weaponWidth;
            rightW = characterRight;
        } else {
            let characterLeft = this.parent.getLeft()
            leftW = characterLeft;
            rightW = characterLeft + this.weaponWidth;
        }
        let collision = (leftW < x && x < rightW && topW < y && y < botW);
        this.enemyCollision = collision;
        return collision
    }
    calcDamage(){return this.damage}
}

export default Weapon;