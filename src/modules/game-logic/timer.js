export default class Timer {

    constructor(timeStep, update, render,ctx, parent){
        this.accumulatedTime = 0;
        this.animationFrameRequest = undefined;
        this.time = undefined;
        this.timeStep = timeStep;
        this.ctx = ctx
        this.gameOver = false;
        this.gameOverTimer = 50;

        this.updated = false;
        this.update = update;
        this.render = render;
        this.parent = parent;

        this.run = (timeStamp) => {
            this.accumulatedTime += timeStamp - this.time;
            this.time = timeStamp;

            while(this.accumulatedTime >= this.timeStep){
                this.accumulatedTime -= this.timeStep;
                this.update(timeStamp);

                this.updated = true;
            }

            if(this.updated){
                this.updated = false;
                this.gameOver = this.render(ctx);
            }

            if(this.gameOver){
                this.gameOverTimer -= 1;
            }

            this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
        };
        this.handleRun = (timeStep) => {
            if(!this.gameOverTimer){
                let img = document.getElementsByClassName('you-died-img')[0].id = 'you-died-img-displayed';
                if(this.parent.volume){
                    let audio = document.getElementById('you-died-audio');
                    audio.volume = 0.025;
                    audio.play();
                }
            }
            this.run(timeStep);
        }
    };

    start(){
        this.accumulatedTime = this.timeStep;
        this.time = window.performance.now();
        this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
    };

}