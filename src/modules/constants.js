import { 
    testMap, 
    testMap2, 
    testMap3, 
    testMap4, 
    testMap5 
} from './castle_level';
import { 
    collisionTestMap, 
    collisionTestMap2, 
    collisionTestMap3, 
    collisionTestMap4, 
    collisionTestMap5 
} from './collision_map';

//tilesheets

export const PLAYER_SPRITE_SHEET = () => {
    return document.getElementById('main-character-tileset');
};
export const PLAYER_SPRITE_SHEET_REVERSED = () => {
    return document.getElementById('main-character-reversed-tileset');
};
export const SKELETON_ATTACK_SPRITE_SHEET = () => {
    return document.getElementById('skeleton1-tileset');
};
export const SKELETON_DEAD_SPRITE_SHEET = () => {
    return document.getElementById('skeleton2-tileset');
};
export const SKELETON_WALK_SPRITE_SHEET = () => {
    return document.getElementById('skeleton3-tileset');
};

export const WORLD_SPRITE_SHEET = () => {
    return document.getElementById('castle-tileset');
};




// Key/Value pairs for tiles on the tile_castle_grey.png
export const TILE_SHEET_KEY = {
    0: [458,0,32,32,32,32], // empty space
    
    1: [128, 0, 32, 32, 32, 32], //wall gray on left&bottom
    2: [160, 0, 32,32,32,32], // wall gray on bottom
    3: [192, 0, 32, 32, 32, 32 ], // wall gray on right&bottom

    4: [0, 32, 32 ,32 ,32 ,32 ], // wall gray on left&top
    5: [32,32,32,32,32,32], // wall gray on top
    6: [64, 32, 32, 32, 32, 32], // wall gray on right&top
    7: [96,32,32,32,32,32], //wall gray on left&right&top
    
    8: [128,32,32,32,32,32], // wall gray on left&top&bottom
    9: [160, 32, 32,32,32,32], //wall gray on top&bottom
    10: [192,32,32,32,32,32], //wall gray on right&top&bottom
    
    11: [224,32,32,32,32,32], // wall 1/2 height gray on top

    12: [384,32,32,32,32,32], //stairs positive slope
    13: [416,32,32,32,32,32],//stairs negative slope

    14: [0, 64, 32 ,32 ,32 ,32], //wall gray on left
    15: [32,64,32,32,32,32], // wall no gray
    16: [64, 64, 32, 32 ,32 ,32], //wall gray on right
    17: [96,64,32,32,32,32], //wall gray on left&right
    18: [128,64,32,32,32,32],//wall gray on all sides

    19: [160,64,32,32,32,32], //walking block end left
    20: [192,64,32,32,32,32], // walking block continuous
    21: [192,64,32,32,32,32], //walking block end right
    22: [0,128,32,32,32,32], //blank wall block
    23: [32,416,32,32,32,32], // wooden platform can jump through

    24: [0,96,96,96,96,96], //wall w/ small hole
    25: [96,96,96,96,96,96], //wall w/ big hole
    26: [448,448,32,32,32,32], //secret chain
    27: [288,352,64,96,64,96], //open gate
    28: [352,352,64,96,64,96] //closed gate
};

//Map key so its not in a big array
export const MAPS_LIST = {
    0: {
        visualMap: testMap,
        collisionMap: collisionTestMap
    },
    1: {
        visualMap: testMap2,
        collisionMap: collisionTestMap2
    },
    2: {
        visualMap: testMap3,
        collisionMap: collisionTestMap3
    },
    3: {
        visualMap: testMap4,
        collisionMap: collisionTestMap4
    },
    4: {
        visualMap: testMap5,
        collisionMap: collisionTestMap5
    }
}


//sprite key for MC knight
export const ANIMATION_FRAMES_MC = {
    'idle': {
        status: 'idle',
        row: 0, 
        frames: [0,1,2,3]
    },
    'run': {
        status: 'run',
        row: 1, 
        frames: [0,1,2,3,4,5,6,7]
    },
    'jump': {
        status: 'jump',
        row: 2, 
        frames: [0,1,2]
    },
    'fall': {
        status: 'fall',
        row: 3, 
        frames: [0,1]
    },
    'attack': {
        status: 'attack',
        row: 4, 
        frames: [0,1,2,3,4,5]
    },
    'damaged': {
        status: 'damaged',
        row: 5, 
        frames: [0]
    },
    'dead': {
        status: 'dead',
        row: 6, 
        frames: [0,1,2,3,4,5,6]
    }
}


//sprite key for MC knight
export const ANIMATION_FRAMES_SKELETON = {
    'run': {
        status: 'run',
        row: 0, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12]
    },
    'attack': {
        status: 'attack',
        row: 0, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    },
    'dead': {
        status: 'dead',
        row: 0, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    }
}

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

export const MAIN_CHARACTER = {
    speed: .8,
    gravity: 1.2,
    jump_height: 35,
    friction: .9,
    height: 50,
    width: 30,
    health: 10,
    start_x: 48,
    start_y: 678,
    starting_status: 'idle',
    animation_buffer: 10,
    sprite_sheet: PLAYER_SPRITE_SHEET,
    sprite_sheet_reversed: PLAYER_SPRITE_SHEET_REVERSED,
    animation_frames: ANIMATION_FRAMES_MC,

}
export const SPEED = .8;
export const GRAVITY = 1.2;
export const JUMP_HEIGHT = 35;
export const FRICTION = .9;
export const HIGH_FRICTION = .1;
export const HEIGHT = 50;
export const WIDTH = 30;
export const HEALTH = 10;
export const START_X = 48;
export const START_Y = 678;
export const STARTING_STATUS = 'idle';
export const ANIMATION_BUFFER = 10;