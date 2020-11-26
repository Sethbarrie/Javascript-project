class EntityCollision{

    constructor(entity, parent){
        this.parent = parent;
        this.entity = entity;
    }


    entityCollision(entity){
        if(
            this.parent.getLeft() < entity.getRight()
            && this.parent.getRight() > entity.getLeft()
            && this.parent.getTop() < entity.getBottom()
            && this.parent.getBottom() > entity.getTop()){
                
            }
    }
}

export default EntityCollision;