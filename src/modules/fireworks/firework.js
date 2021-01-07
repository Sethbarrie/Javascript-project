import FireworkParticle from './firework_particle';


class Firework{
    constructor(pos){
        this.pos = pos;
        this.particlesArr = [...Array(500)].map(() => new FireworkParticle(pos));
        this.finished = false;
    }

    update(timeStep){
        this.particlesArr.forEach(particle => {
            if(particle.alive){
                particle.update(timeStep);
            }
        })
        if(this.particlesArr.every( particle => !particle.alive)){
            this.finished = true;
        }
    }

    draw(ctx){
        if(!this.finished){
            this.particlesArr.forEach(particle => particle.draw(ctx));
        }
    }
}

export default Firework;