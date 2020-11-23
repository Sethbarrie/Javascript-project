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
import {
    ANIMATION_FRAMES_MC,
    ANIMATION_FRAMES_SKELETON
} from './tile_keys';

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
    animation_frames: ANIMATION_FRAMES_MC,
    starting_status: 'idle',
    animation_buffer: 10,
    health: 9,
    damageCounter: 180,
    jump_height: 35,
    shortHopTimer: 100,
    phaseTimer: 5,
    height: 50,
    width: 30,
    speed: .8,
    friction: .9,
    gravity: 1.2,
    start_x: 48,
    start_y: 678,
    characterXOffset: 25,
    characterYOffset: 25,
    sprite_sheet: PLAYER_SPRITE_SHEET,
    weapon_width: 16,
    weapon_height: 10,
    damage: 1
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