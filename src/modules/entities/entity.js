import { ACTIVE_KEYS } from '../variables/constants';
import Weapon from './weapon';
import Jump from './actions/jump';
import Animation from './actions/animation';
import Positioning from './actions/positioning';
import Health from './actions/health';


class Entity{

    constructor(entity){
        this.positioning = new Positioning(entity,this);
        this.weapon = new Weapon(entity, this);
        this.animation = new Animation(entity, this);
        this.health = new Health(entity);
        this.jump = new Jump(entity, this);
    }

    update(timeStep){
        if(this.totalHealth() > 0){
            this.jump.update(timeStep);
            this.positioning.update(timeStep);
            this.weapon.update();
            this.damageEntity();
        }
        return this.animation.update(timeStep);
    }

    //Positioning
    getTop(){return this.positioning.getTop()};
    getBottom(){return this.positioning.getBottom()};
    getLeft(){return this.positioning.getLeft()};
    getRight(){return this.positioning.getRight()};
    
    getOldTop(){return this.positioning.getOldTop()};
    getOldBottom(){return this.positioning.getOldBottom()};
    getOldLeft(){return this.positioning.getOldLeft()};
    getOldRight(){return this.positioning.getOldRight()};
    
    setTop(y){this.positioning.setTop(y)};
    setBottom(y){this.positioning.setBottom(y)};
    setLeft(x){this.positioning.setLeft(x)};
    setRight(x){this.positioning.setRight(x)};
    
    setOldTop(y){this.positioning.setOldTop(y)};
    setOldBottom(y){this.positioning.setOldBottom(y)};
    setOldLeft(x){this.positioning.setOldLeft(x)};
    setOldRight(x){this.positioning.setOldRight(x)};
    
    getXVelocity(){return this.positioning.getXVelocity()};
    getYVelocity(){return this.positioning.getYVelocity()};

    setXVelocity(x){this.positioning.setXVelocity(x)};
    setYVelocity(y){this.positioning.setYVelocity(y)};

    getHeight(){return this.positioning.getHeight()}
    getWidth(){return this.positioning.getWidth()}

    getInversion(){return this.positioning.getInversion()}
    setInversion(){this.positioning.setInversion()}

    getXOffset(){return this.positioning.getXOffset()}
    getYOffset(){return this.positioning.getYOffset()}

    move(){this.positioning.move()}

    //These are checks for the animation status in order
    //The totalHealth method is at the top but used in other things
    //totalHealth()
    damagedAnimation(){return this.health.damagedAnimation()}
    swingingAnimation(){return this.weapon.swingingAnimation()}
    jumpingAnimation(){return this.jump.jumpingAnimation()}
    movingAnimation(){return this.positioning.movingAnimation()}
    
    
    //Weapon swing flowchart
    // swinging  checks if player is swinging
    // weaponEnemyCollision   checks if player already hit enemy in that sword swing
    // hitboxActive   checks if the players sword has active hitboxes 
    // weaponCollision  checks if enemy collided with sword
    // calc damage sends back integer of how much damage the opponent will take
    weaponEnemyCollision(){return this.weapon.weaponEnemyCollision()}
    hitboxActive(){return this.weapon.hitboxActive()}
    weaponCollision(x,y,width, height){return this.weapon.weaponCollision(x,y, width, height)}
    calcDamage(){return this.weapon.calcDamage()}
    //
    getWeaponWidth(){return this.weapon.getWeaponWidth()}
    getWeaponHeight(){return this.weapon.getWeaponHeight()}
    
    //Controller
    checkActiveKeys(input){return ACTIVE_KEYS[input]}
    setActiveKeys(input, keyState){ACTIVE_KEYS[input] = keyState}
    
    //Animation
    currentAnimationFrame(){return this.animation.currentAnimationFrame()}
    currentStatus(){return this.animation.currentStatus()}
    endOfAnimation(){return this.animation.endOfAnimation()}
    
    //Health
    totalHealth(){return this.health.totalHealth()}
    damageEntity(damage){this.health.damageEntity(damage)}

    //Jump
    // setCharacterJump(){this.jump.setCharacterJump()}
    // fallThroughPlatform(){this.jump.fallThroughPlatform()}
    bonk(){this.jump.bonk()}
}

export default Entity;