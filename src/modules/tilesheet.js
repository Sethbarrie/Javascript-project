import { TILE_SIZE } from "./constants";



class Tilesheet{

    constructor(tilesizew,tilesizeh, columns, tileKey,image){
        this.tilesize_w = tilesizew;
        this.tilesize_h = tilesizeh;
        this.columns = columns;
        this.image = image;
        this.tileKey = tileKey;
    }

    // draw(ctx,tile_start_x, tile_start_y, tile_size_x, tile_size_y, img_pos_x, img_pos_y, img_width, img_height){
    //     ctx.drawImage(
    //         this.image,  //image source, aka tile sheet
    //         tile_start_x, //starting position of the tile sheet for the x
    //         tile_start_y, //starting position of the tile sheet for the y
    //         tile_size_x, //how big the tilesheet image is for x
    //         tile_size_y, //how big the tilesheet image is for y
    //         img_pos_x,                  //where the image goes on the canvas for x
    //         img_pos_y,                  //where the image goes on the canvas for y
    //         img_width, //how big the image is on the canvas for x
    //         img_height, //how big the image is on the canvas for y
    //     )
    // }

    draw(ctx, status, frame, posX, posY, spriteWidth, spriteHeight, inverted ){
        // debugger
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