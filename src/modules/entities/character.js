import { setKeyBinding } from "./actions/controls";
import Entity from "./entity";
import Tilesheet from '../game-logic/tilesheet';


class Character extends Entity{

    constructor(entity){
        super(entity);
        this.sprite = new Tilesheet(32, 32, 32, entity.animation_frames, entity.sprite_sheet());
        setKeyBinding();
        this.width = entity.width;
        this.height = entity.height;
        this.frame = 0;
        this.draw = this.draw.bind(this);
    }

    move(){

    }

    update(timeStep){
        this.frame = super.update(timeStep);
    }

    // collision(){

    // }

    draw(ctx){
        let xOffset = this.getXOffset();
        let yOffset = this.getYOffset();
        this.sprite.draw(
            ctx, 
            this.animation.currentStatus(), 
            this.frame,
            this.getInversion() ? this.getLeft() - xOffset: this.getLeft() , // this is to set the hitbox smaller only on the left side while facing left
            this.getTop() - yOffset, // this is to offset the size difference of the hitbox
            this.width + xOffset, // this is to make the player wider but have the hitbox small
            this.height + yOffset, //this is to make the player taller but have the hitbox small
            this.getInversion()
        );
    }

}

export default Character;