import { 
    TILE_SIZE,
    WINDOW_HEIGHT,
    WINDOW_WIDTH
} from "../variables/constants";



class Tilesheet{

    constructor(tilesizew,tilesizeh, columns, tileKey,image){
        this.tilesize_w = tilesizew;
        this.tilesize_h = tilesizeh;
        this.columns = columns;
        this.image = image;
        this.tileKey = tileKey;
        this.invertedSize = tileKey.inverted;
        this.buffer = document.createElement('canvas');
        this.buffer.height = WINDOW_HEIGHT;
        this.buffer.width = WINDOW_WIDTH;
        this.bufferCTX = this.buffer.getContext('2d');
    }

    drawSprite(ctx, status, frame, posX, posY, spriteWidth, spriteHeight, inverted ){
        ctx.drawImage(
            this.image,
            frame * status.width, //starting position of the tile sheet for the x
            inverted ? status.offset + this.invertedSize : status.offset, //starting position of the tile sheet for the y
            status.width, //how big the tilesheet image is for x
            status.height, //how big the tilesheet image is for y
            posX,                  //where the image goes on the canvas for x
            posY,                  //where the image goes on the canvas for y
            spriteWidth, //how big the image is on the canvas for x
            spriteHeight, //how big the image is on the canvas for y
        )
    }

    drawCastle(idx, tile){
        let posX = ((idx % this.columns) * this.tilesize_w);
        let posY = (Math.floor(idx / this.columns) * this.tilesize_h);
        this.bufferCTX.drawImage(
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

    draw(ctx, scrolled){
        if(scrolled){
            this.bufferCTX.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
        }
        ctx.drawImage(
            this.buffer,0,0
        )
    }
}

export default Tilesheet;