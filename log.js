class Log{
    constructor(x,y,width,height,angle){
        var option = {
            restitution : 0.5,
            friction : 1.0,
            density : 1.0
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,option);
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER)
        fill("red");
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        rect(0,0,this.width,this.height)
        pop();
    }
    
}