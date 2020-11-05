import Tilesheet from './tilesheet';
// import * as CastleLevel from './castle_level';
import {
    TILE_SHEET_KEY,
    COLUMNS,
    TILE_SIZE
} from './constants';


class Castle{

    constructor(){
        this.level = 1;
        this.image = document.getElementById('castle-tileset');
    }

    // move(character){
    //     if(character.y <= 50){
    //         this.level -= 1
    //     }
    // }

    draw(ctx, testMap){
        testMap.forEach((tile, idx) => {
            let posX = ((idx % COLUMNS) * TILE_SIZE);
            let posY = (Math.floor(idx / COLUMNS) * TILE_SIZE);
            ctx.drawImage(this.image,  //image source, aka tile sheet
                TILE_SHEET_KEY[tile][0], //starting position of the tile sheet for the x
                TILE_SHEET_KEY[tile][1], //starting position of the tile sheet for the y
                TILE_SHEET_KEY[tile][2], //how big the tilesheet image is for x
                TILE_SHEET_KEY[tile][3], //how big the tilesheet image is for y
                posX,                  //where the image goes on the canvas for x
                posY,                  //where the image goes on the canvas for y
                TILE_SHEET_KEY[tile][4], //how big the image is on the canvas for x
                TILE_SHEET_KEY[tile][5], //how big the image is on the canvas for y
            ) 
        })
    }

}



export default Castle;