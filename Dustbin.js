class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //this.thickness = thickness;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        ///var angle = this.body.angle;
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        //pop();
    }
}