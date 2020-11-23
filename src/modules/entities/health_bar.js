import { 
    HEALTH_SPRITE_SHEET
} from "../variables/constants";
import { 
    HEALTH_TILE_KEY
} from "../variables/tile_keys";
import Tilesheet from "../game-logic/tilesheet";


class HealthBar{

    constructor(){
        this.sprite = new Tilesheet(600,600, 8, HEALTH_TILE_KEY, HEALTH_SPRITE_SHEET());
    }

    draw(ctx, health){
        this.sprite.draw(ctx, HEALTH_TILE_KEY['0'], 0, 10, 10, 125,125);
        if(health >= 3){
            for( let i = 3; i <= health; i ++){
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
            for(let i = health; i > 0; i--){
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

export default HealthBar;