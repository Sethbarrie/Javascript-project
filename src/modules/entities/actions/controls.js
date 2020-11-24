import {
    ACTIVE_KEYS
} from '../../variables/constants';

export const setKeyBinding = () => {
    window.addEventListener('keydown', e => {
        switch(e.key){
            case('a'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowLeft'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('d'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowRight'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case(" "):
                ACTIVE_KEYS[e.key] = true;
                break;
            case("k"):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('w'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowUp'):
                ACTIVE_KEYS[e.key] = true;
                break;                
            case('s'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('ArrowDown'):
                ACTIVE_KEYS[e.key] = true;
                break;
            case('Shift'):
                ACTIVE_KEYS[e.key] = true;
                break;
            default:
                break;
        }
        e.preventDefault()
    });
    window.addEventListener('keyup', e => {
        switch(e.key){
            case('a'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowLeft'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('d'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowRight'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case(" "):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('w'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowUp'):
                ACTIVE_KEYS[e.key] = false;
                break;                
            case('s'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('ArrowDown'):
                ACTIVE_KEYS[e.key] = false;
                break;
            case('Shift'):
                ACTIVE_KEYS[e.key] = false;
                break;
            default:
                break;
        }
        e.preventDefault()
    });
}