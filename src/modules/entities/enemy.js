import { setKeyBinding } from "./actions/controls";
import Entity from "./entity";
import Tilesheet from '../game-logic/tilesheet';


class Enemy extends Entity{

    constructor(entity, startX, startY){
        entity.start_x = startX;
        entity.start_y = startY;
        super(entity);
        this.sprite = new Tilesheet(32, 32, 32, entity.animation_frames, entity.sprite_sheet());
        this.width = entity.width;
        this.height = entity.height;
        this.frame = 0;
        this.draw = this.draw.bind(this);
    }

    move(){

    }

    update(timeStep){
        this.frame = super.updateEnemy(timeStep);
    }


    draw(ctx){
        let xOffset = this.getXOffset();
        let yOffset = this.getYOffset();
        let top = this.getTop();
        let left = this.getLeft();
        this.sprite.drawSprite(
            ctx, 
            this.animation.currentStatus(), 
            this.frame,
            this.getInversion() ? left - xOffset: left , // this is to set the hitbox smaller only on the left side while facing left
            top - yOffset, // this is to offset the size difference of the hitbox
            this.width + xOffset, // this is to make the player wider but have the hitbox small
            this.height + yOffset, //this is to make the player taller but have the hitbox small
            this.getInversion()
        );
    }
}

export default Enemy;
