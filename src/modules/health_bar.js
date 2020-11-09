import { 
    HEALTH_SPRITE_SHEET,
    HEALTH_TILE_KEY
 } from "./constants";
import Tilesheet from "./tilesheet";


class HealthBar{

    constructor(character){
        this.character = character;
        this.sprite = new Tilesheet(600,600, 8, HEALTH_TILE_KEY, HEALTH_SPRITE_SHEET());
        this.heartArray = [];
    }

    draw(ctx){
        debugger
        let heartDisplay = this.character.health;
        this.sprite.draw(ctx, HEALTH_TILE_KEY['0'], 0, 10, 10, 125,125, 0);
        if(heartDisplay >= 3){
            for( let i = 3; i <= heartDisplay; i ++){
                this.sprite.draw(
                    ctx, 
                    HEALTH_TILE_KEY[i.toString()],
                    HEALTH_TILE_KEY[i.toString()]['frame'],
                    HEALTH_TILE_KEY[i.toString()]['x'],
                    HEALTH_TILE_KEY[i.toString()]['y'],
                    40,
                    40,
                    0
                    )
            }
        } else {
            for(let i = heartDisplay; i > 0; i--){
                this.sprite.draw(
                    ctx, 
                    HEALTH_TILE_KEY[i.toString()],
                    HEALTH_TILE_KEY[i.toString()]['frame'],
                    HEALTH_TILE_KEY[i.toString()]['x'],
                    HEALTH_TILE_KEY[i.toString()]['y'],
                    20,
                    40,
                    0
                    )
            }
        }
    }
}

// '4': {
//     width: 1095,
//     height: 100
// },



// draw(ctx, status, frame, posX, posY, spriteWidth, spriteHeight, inverted ){
//     // debugger
//     ctx.drawImage(
//         this.image,
//         frame * status['width'], //starting position of the tile sheet for the x
//         (status['offset']) + inverted, //starting position of the tile sheet for the y
//         status['width'], //how big the tilesheet image is for x
//         status['height'], //how big the tilesheet image is for y
//         posX,                  //where the image goes on the canvas for x
//         posY,                  //where the image goes on the canvas for y
//         spriteWidth, //how big the image is on the canvas for x
//         spriteHeight, //how big the image is on the canvas for y
//     )
// }


export default HealthBar;


// tilesizew,tilesizeh, columns, tileKey,image
// draw(ctx, status, frame, posX, posY, spriteWidth, spriteHeight, inverted ){
