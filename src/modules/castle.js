import Tilesheet from './tilesheet';
import {
    WORLD_SPRITE_SHEET,
    TILE_SHEET_KEY,
    COLUMNS,
    TILE_SIZE
} from './constants';


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