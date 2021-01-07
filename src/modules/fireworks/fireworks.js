import Firework from './firework';


class Fireworks {
    constructor(){
        this.started = false;
        this.fireworksArr = [];
        this.timer = 1000;
    }

    start(){
        this.started = true;
        this.fireworksArr.push(new Firework(this.randomStartPOS()));
    }

    update(timeStep){
        if(this.fireworksArr.length){
            this.fireworksArr.forEach( firework => {
                if(!firework.finished){
                    firework.update(timeStep);
                } else {
                    this.fireworksArr.pop();
                }
            });
        }
        if(!this.fireworksArr.length && this.timer <= 0){
            this.timer = 1000;
            this.fireworksArr.push(new Firework(this.randomStartPOS()));
        } else {
            this.timer -= 15;
        }
    }

    draw(ctx){
        if(this.fireworksArr.length){
            this.fireworksArr.forEach( firework => firework.draw(ctx));
        }
    }

    randomStartPOS(){
        let x = this.getRandomInt(200, 900);
        let y = this.getRandomInt(200, 400);

        return [x, y];
    }

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
      
}

export default Fireworks;