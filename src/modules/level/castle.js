import Tilesheet from '../game-logic/tilesheet';
import Viewport from '../game-logic/viewport';
import {
    WORLD_SPRITE_SHEET,
    COLUMNS,
    TILE_SIZE
} from '../variables/constants';
import {TILE_SHEET_KEY} from '../variables/tile_keys';


class Castle{

    constructor(ctx){
        this.level = 0;
        this.viewport = new Viewport(0);
        this.image = new Tilesheet(
            TILE_SIZE,
            TILE_SIZE,
            COLUMNS,
            TILE_SHEET_KEY,
            WORLD_SPRITE_SHEET()
        );
    }

    update(entities){
        this.level = this.viewport.update(entities);
    }

    draw(ctx){
        this.viewport.visibleMap.forEach((tile, idx) => {
            this.image.drawCastle(idx, tile);
        });
        this.image.draw(ctx, this.viewport.scrolled);
    }
    
    debugMode(character, ctx){
        this.viewport.debugMode(character, ctx);
    }


}



export default Castle;