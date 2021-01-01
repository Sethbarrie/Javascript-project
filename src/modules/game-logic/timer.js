export default class Timer {

    constructor(timeStep, update, render,ctx, parent){
        this.accumulatedTime = 0;
        this.animationFrameRequest = undefined;
        this.time = undefined;
        this.timeStep = timeStep;
        this.ctx = ctx
        this.gameOver = false;
        this.gameOverTimer = 300;
        let flag = false;
        let secondflag = false;

        this.updated = false;
        this.update = update;
        this.render = render;
        this.parent = parent;

        this.run = (timeStamp) => {
            this.accumulatedTime += timeStamp - this.time;
            this.totalTime += timeStamp;
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
                flag = true;
                this.gameOverTimer -= 1;
            }

            if(flag && !secondflag){
                let y = document.getElementsByClassName('ending-credits')[0];
                y.id = null;
                secondflag = true;
            }

            this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
        };
        this.handleRun = (timeStep) => {
            if(this.gameOverTimer < 250){
                document.getElementsByClassName('you-died-img')[0].id = 'you-died-img-displayed';
                let audio = document.getElementById('you-died-audio');
                audio.volume = 0.025;
                audio.play();
            }
            if(this.gameOverTimer){
                this.run(timeStep);
            }
        }
    };

    start(){
        this.accumulatedTime = this.timeStep;
        this.time = window.performance.now();
        this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
    };

}