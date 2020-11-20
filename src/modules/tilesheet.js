import { 
    TILE_SIZE,
    WINDOW_HEIGHT,
    WINDOW_WIDTH
} from "./constants";



class Tilesheet{

    constructor(tilesizew,tilesizeh, columns, tileKey,image){
        this.tilesize_w = tilesizew;
        this.tilesize_h = tilesizeh;
        this.columns = columns;
        this.image = image;
        this.tileKey = tileKey;
    }

    draw(ctx, status, frame, posX, posY, spriteWidth, spriteHeight, inverted ){
        ctx.drawImage(
            this.image,
            frame * status['width'], //starting position of the tile sheet for the x
            (status['offset']) + inverted, //starting position of the tile sheet for the y
            status['width'], //how big the tilesheet image is for x
            status['height'], //how big the tilesheet image is for y
            posX,                  //where the image goes on the canvas for x
            posY,                  //where the image goes on the canvas for y
            spriteWidth, //how big the image is on the canvas for x
            spriteHeight, //how big the image is on the canvas for y
        )
    }

    drawCastle(ctx, idx, tile, level){
        let posX = ((idx % this.columns) * this.tilesize_w);
        let posY = (Math.floor(idx / this.columns) * this.tilesize_h);
        ctx.drawImage(
            this.image,
            this.tileKey[tile][0], //starting position of the tile sheet for the x
            this.tileKey[tile][1], //starting position of the tile sheet for the y
            this.tileKey[tile][2], //how big the tilesheet image is for x
            this.tileKey[tile][3], //how big the tilesheet image is for y
            posX,                  //where the image goes on the canvas for x
            posY,                  //where the image goes on the canvas for y
            this.tileKey[tile][4], //how big the image is on the canvas for x
            this.tileKey[tile][5], //how big the image is on the canvas for y
        )
    }
}

export default Tilesheet;