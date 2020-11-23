export default class Timer {

    constructor(time_step, update, render,ctx){
        this.accumulated_time = 0;
        this.animation_frame_request = undefined;
        this.time = undefined;
        this.time_step = time_step;
        this.ctx = ctx

        this.updated = false;
        this.update = update;
        this.render = render;

        this.run = (time_stamp) => {
            this.accumulated_time += time_stamp - this.time;
            this.time = time_stamp;

            while(this.accumulated_time >= this.time_step){
                this.accumulated_time -= this.time_step;
                this.update(time_stamp);

                this.updated = true;
            }

            if(this.updated){
                this.updated = false;
                this.render(ctx);
            }

            this.animation_frame_request = window.requestAnimationFrame(this.handleRun);
        };
        this.handleRun = (time_step) => {this.run(time_step);}
    };

    start(){
        this.accumulated_time = this.time_step;
        this.time = window.performance.now();
        this.animation_frame_request = window.requestAnimationFrame(this.handleRun);
    };
}