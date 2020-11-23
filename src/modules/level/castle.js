import Tilesheet from '../game-logic/tilesheet';
import {
    WORLD_SPRITE_SHEET,
    COLUMNS,
    TILE_SIZE
} from '../variables/constants';
import {TILE_SHEET_KEY} from '../variables/tile_keys';


class Castle{

    constructor(){
        this.level = 0;
        this.image = new Tilesheet(
            TILE_SIZE,
            TILE_SIZE,
            COLUMNS,
            TILE_SHEET_KEY,
            WORLD_SPRITE_SHEET()
        );
    }

    draw(ctx, testMap){
        testMap.forEach((tile, idx) => {
            this.image.drawCastle(ctx, idx, tile, this.level);
        })
    }
}



export default Castle;