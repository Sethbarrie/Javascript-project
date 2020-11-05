
// Key/Value pairs for tiles on the tile_castle_grey.png
export const TILE_SHEET_KEY = {
    4: [128,32,32,32,32,32], //walking block end left
    5: [160,32,32,32,32,32], // walking block continuous
    6: [192,32,32,32,32,32], //walking block end right

    0: [458,0,32,32,32,32], // empty space
    20: [32,416,32,32,32,32],
    23: [105,15,49,30]
};

//General info
export const WINDOW_HEIGHT = 768;
export const WINDOW_WIDTH = 1024;
export const TILE_SIZE = 32;
export const COLUMNS = 32;
export const ROWS = 24;
export const INTERVAL = 1000/60;

//Active keys for player controls
export let ACTIVE_KEYS = {};


//Character stats
export const SPEED = .8;
export const GRAVITY = 1.2;
export const JUMP_HEIGHT = 35;
export const FRICTION = .9;
export const HEIGHT = 50;
export const WIDTH = 30;
