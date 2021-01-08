import { events } from './events';


class Commentary{

    constructor(parent){
        this.parent = parent;
        this.timer = 5000;
        this.container = document.getElementById('instruction-block');
    }

}

export default Commentary;