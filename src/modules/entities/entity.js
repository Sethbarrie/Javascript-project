import { ACTIVE_KEYS } from '../constants';
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
            debugger
            this.positioning.update(timeStep);
            this.jump.update(timeStep);
        }
        return this.animation.update(timeStep);
    }

    //Positioning
    getTop(){this.positioning.getTop()};
    getBottom(){this.positioning.getBottom()};
    getLeft(){this.positioning.getLeft()};
    getRight(){this.positioning.getRight()};
    
    getOldTop(){this.positioning.getOldTop()};
    getOldBottom(){this.positioning.getOldBottom()};
    getOldLeft(){this.positioning.getOldLeft()};
    getOldRight(){this.positioning.getOldRight()};
    
    setTop(y){this.positioning.setTop(y)};
    setBottom(y){this.positioning.setBottom(y)};
    setLeft(x){this.positioning.setLeft(x)};
    setRight(x){this.positioning.setRight(x)};
    
    setOldTop(y){this.positioning.setOldTop(y)};
    setOldBottom(y){this.positioning.setOldBottom(y)};
    setOldLeft(x){this.positioning.setOldLeft(x)};
    setOldRight(x){this.positioning.setOldRight(x)};
    
    getXVelocity(){this.positioning.getXVelocity()};
    getYVelocity(){this.positioning.getYVelocity()};

    setXVelocity(x){this.positioning.setXVelocity(x)};
    setYVelocity(y){this.positioning.setYVelocity(y)};

    getHeight(){this.positioning.getHeight()}
    getWidth(){this.positioning.getWidth()}

    getInversion(){return this.positioning.getInversion()}
    setInversion(){this.positioning.setInversion()}

    getXOffset(){this.positioning.getXOffset()}
    getYOffset(){this.positioning.getYOffset()}

    move(){this.positioning.move()}

    movingAnimation(){this.positioning.movingAnimation()}
    
    
    //Weapon swing flowchart
    swingingAnimation(){this.weapon.swingingAnimation()}
    // swinging  checks if player is swinging
    weaponEnemyCollision(){return this.weapon.weaponEnemyCollision()}
    // weaponEnemyCollision   checks if player already hit enemy in that sword swing
    hitboxActive(){return this.weapon.hitboxActive()}
    // hitboxActive   checks if the players sword has active hitboxes 
    weaponCollision(x,y){return this.weapon.weaponCollision(x,y)}
    // weaponCollision  checks if enemy collided with sword
    calcDamage(){this.weapon.calcDamage()}
    // calc damage sends back integer of how much damage the opponent will take
    
    //Controller
    checkActiveKeys(input){return ACTIVE_KEYS[input]}
    setActiveKeys(input, keyState){ACTIVE_KEYS[input] = keyState}
    
    //Animation
    currentAnimationFrame(){return this.animation.currentAnimationFrame()}
    currentStatus(){return this.animation.currentStatus()}
    
    //Health
    totalHealth(){return this.health.totalHealth()}
    damageEntity(damage){this.health.damageEntity(damage)}
    damagedAnimation(){this.health.damagedAnimation()}

    //Jump
    jumpingAnimation(){this.jump.jumpingAnimation()}
    setCharacterJump(){this.jump.setCharacterJump()}
    fallThroughPlatform(){this.jump.fallThroughPlatform()}
    bonk(){this.jump.bonk()}
}

export default Entity;