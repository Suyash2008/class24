class Bird{
    constructor(x,y){
        var option = {
            restitution : 0.5,
            friction : 1.0,
            density : 1.0
        }
        this.width = 50
        this.height = 50
        this.body = Bodies.rectangle(x,y,50,50,option);
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