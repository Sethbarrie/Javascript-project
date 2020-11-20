// import { 
//     HEALTH_SPRITE_SHEET,
//     HEALTH_TILE_KEY
//  } from "./constants";
// import Tilesheet from "./tilesheet";


// class HealthBar{

//     constructor(character){
//         this.character = character;
//         this.sprite = new Tilesheet(600,600, 8, HEALTH_TILE_KEY, HEALTH_SPRITE_SHEET());
//         this.heartArray = [];
//     }

//     draw(ctx){
//         let heartDisplay = this.character.health;
//         this.sprite.draw(ctx, HEALTH_TILE_KEY['0'], 0, 10, 10, 125,125, 0);
//         if(heartDisplay >= 3){
//             for( let i = 3; i <= heartDisplay; i ++){
//                 this.sprite.draw(
//                     ctx, 
//                     HEALTH_TILE_KEY[i.toString()],
//                     HEALTH_TILE_KEY[i.toString()]['frame'],
//                     HEALTH_TILE_KEY[i.toString()]['x'],
//                     HEALTH_TILE_KEY[i.toString()]['y'],
//                     40,
//                     40,
//                     0
//                     )
//             }
//         } else {
//             for(let i = heartDisplay; i > 0; i--){
//                 this.sprite.draw(
//                     ctx, 
//                     HEALTH_TILE_KEY[i.toString()],
//                     HEALTH_TILE_KEY[i.toString()]['frame'],
//                     HEALTH_TILE_KEY[i.toString()]['x'],
//                     HEALTH_TILE_KEY[i.toString()]['y'],
//                     20,
//                     40,
//                     0
//                     )
//             }
//         }
//     }
// }

// export default HealthBar;