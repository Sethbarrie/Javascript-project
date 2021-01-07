class FireworkParticle{

    constructor(pos){
        this.pos = pos;
        this.color = this.getRandomColor();
        this.gravity = Math.random();
        this.xSpeed = (this.getRandomInt(-50, 50)/10);
        this.ySpeed = (this.getRandomInt(-75, 0)/10);
        this.accTime = this.getRandomInt(400,600);
        // this.speed = 2;
        // this.gravity = 1;
        this.alive = true;
    }


    //https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    getRandomColor(){
        let randomColors = [
            'aqua',
            'aquamarine',
            'blue',
            'coral',
            'crimson',
            'cyan',
            'darkgray',
            'darkslateblue',
            'indigo',
            'navy',
            'midnightblue',
            'royalblue',
            'powderblue',
            'rebeccapurple',
            'salmon',
            'skyblue',
            'steelblue',
            'tomato'
        ]
        return randomColors[Math.floor(Math.random() * randomColors.length)];
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    update(timeStep){
        this.pos = [
            (this.pos[0] + this.xSpeed),
            (this.pos[1] + this.ySpeed)
        ]
        this.accTime -= (15);
        this.gravity += Math.random();
        this.ySpeed += this.gravity * .03;
        if(this.accTime <= 0){
            this.alive = false;
        }
    }

    draw(ctx){
        if(this.alive){
            ctx.beginPath();
            ctx.arc(Math.floor(this.pos[0]), Math.floor(this.pos[1]), 2, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            // ctx.stroke();
            ctx.fill(); 
        }
    }
}

export default FireworkParticle;