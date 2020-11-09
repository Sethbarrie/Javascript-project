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
export const SKELETON_SPRITE_SHEET = () => {
    return document.getElementById('skeleton-tileset');
};
export const WORLD_SPRITE_SHEET = () => {
    return document.getElementById('castle-tileset');
};
export const HEALTH_SPRITE_SHEET = () => {
    return document.getElementById('health-tileset');
}




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
        frames: [0,1,2,3],
        width: 32,
        height: 32,
        offset: 0
    },
    'run': {
        status: 'run',
        row: 1, 
        frames: [0,1,2,3,4,5,6,7],
        width: 32,
        height: 32,
        offset: 32
    },
    'jump': {
        status: 'jump',
        row: 2, 
        frames: [0,1,2],
        width: 32,
        height: 32,
        offset: 64
    },
    'fall': {
        status: 'fall',
        row: 3, 
        frames: [0,1],
        width: 32,
        height: 32,
        offset: 96
    },
    'attack': {
        status: 'attack',
        row: 4, 
        frames: [0,1,2,3,4,5],
        width: 32,
        height: 32,
        offset: 128
    },
    'damaged': {
        status: 'damaged',
        row: 5, 
        frames: [0],
        width: 32,
        height: 32,
        offset: 160
    },
    'dead': {
        status: 'dead',
        row: 6, 
        frames: [0,1,2,3,4,5,6],
        width: 32,
        height: 32,
        offset: 192
    }
}


//sprite key for skeleton
export const ANIMATION_FRAMES_SKELETON = {
    'run': {
        status: 'run',
        row: 0, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12],
        width: 22,
        height: 33,
        offset: 0
    },
    'attack': {
        status: 'attack',
        row: 1, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        width: 43,
        height: 37,
        offset: 33
    },
    'dead': {
        status: 'dead',
        row: 2, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        width: 33,
        height: 32,
        offset: 77
    }
}


// 11: [224,32,32,32,32,32], // wall 1/2 height gray on top
// 'idle': {
//     status: 'idle',
//     row: 0, 
//     frames: [0,1,2,3],
//     width: 32,
//     height: 32,
//     offset: 0
// },
export const HEALTH_TILE_KEY = {
    
    '0': {
        offset: 0,
        width: 600,
        height: 600
    },
    '1': {
        frame: 25.9,
        offset: 0,
        width: 50,
        height: 100,
        x: 54,
        y: 58
    },
    '2': {
        frame: 27,
        offset: 0,
        width: 50,
        height: 100,
        x: 72,
        y: 58
    },
    
    
    '3': {
        frame: 11.95,
        offset: 0,
        width: 100,
        height: 100,
        x: 53,
        y: 58
    },
    '4': {
        frame: 10.95,
        offset: 0,
        width: 100,
        height: 100,
        x: 53,
        y: 13
    },
    '5': {
        frame: 9.95,
        offset: 0,
        width: 100,
        height: 100,
        x: 10,
        y: 33
    },
    '6': {
        frame: 8.95,
        offset: 0,
        width: 100,
        height: 100,
        x: 93,
        y: 33
    },
    '7': {
        frame: 7.97,
        offset: 0,
        width: 100,
        height: 100,
        x: 7,
        y: 82
    },
    '8': {
        frame: 7,
        offset: 0,
        width: 100,
        height: 100,
        x:99,
        y: 82
    },
    '9': {
        frame: 6,
        offset: 0,
        width: 100,
        height: 100,
        x: 53,
        y: 102
    }
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

export const MAIN_CHARACTER = {
    speed: .8,
    gravity: 1.2,
    jump_height: 35,
    friction: .9,
    height: 50,
    width: 30,
    health: 9,
    start_x: 48,
    start_y: 678,
    weapon_x: 16,
    weapon_y: 10,
    starting_status: 'idle',
    animation_buffer: 10,
    sprite_sheet: PLAYER_SPRITE_SHEET,
    animation_frames: ANIMATION_FRAMES_MC,

}
export const SPEED = .8;
export const GRAVITY = 1.2;
export const JUMP_HEIGHT = 35;
export const FRICTION = .9;
export const HIGH_FRICTION = .1;
export const HEIGHT = 50;
export const WIDTH = 30;
export const HEALTH = 9;
export const START_X = 48;
export const START_Y = 678;
export const STARTING_STATUS = 'idle';
export const ANIMATION_BUFFER = 10;