

class Sword {

    constructor(){

    };

    swing(ctx,x,y){
        ctx.beginPath();
    
        ctx.arc(x + 20, y + 25, 35, 1.4 * Math.PI ,0.5 * Math.PI ); 
    
        ctx.lineWidth = 1;
        ctx.fillStyle = 'pink';
        ctx.strokeStyle = "purple";
        ctx.stroke();
        ctx.fill();
    
    }

    swordDrop(ctx, x, y){
        ctx.beginPath();
    
        ctx.arc(x + 10, y + 35, 35, 0.2 * Math.PI , 0.7 * Math.PI ); 
    
        ctx.lineWidth = 1;
        ctx.fillStyle = 'pink';
        ctx.strokeStyle = "purple";
        ctx.stroke();
        ctx.fill();
    }
}

export default Sword;