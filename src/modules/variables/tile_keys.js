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
        x: 7,
        y: 33
    },
    '6': {
        frame: 8.95,
        offset: 0,
        width: 100,
        height: 100,
        x: 97,
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

//sprite key for skeleton
export const ANIMATION_FRAMES_SKELETON = {
    'run': {
        status: 'run',
        row: 0, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12],
        width: 43,
        height: 37,
        offset: 0
    },
    'attack': {
        status: 'attack',
        row: 1, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        width: 43,
        height: 37,
        offset: 37,
        hitboxFrames: [8,9]
    },
    'dead': {
        status: 'dead',
        row: 2, 
        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        width: 43,
        height: 37,
        offset: 74
    },
    'inverted': 111
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
        offset: 128,
        hitboxFrames: [2,3]
    },
    'damaged': {
        status: 'damaged',
        row: 5, 
        frames: [0,1],
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
    },
    'inverted': 224
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