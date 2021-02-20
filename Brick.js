class Brick{
    constructor(x, y, width, height){
        var options={
            restitution:0.13,
            friction:8,
            density:3000000
        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        this.angle=45;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke(170, 170, 170);
        fill(133, 72, 8);
        rect(0, 0, this.width, this.height);
        line(0-this.width/2, 0-this.height/6, 0+this.width/2, 0-this.height/6);
        line(0-this.width/2, 0+this.height/6, 0+this.width/2, 0+this.height/6);
        line(0-this.width/6, 0-this.height/2, 0-this.width/6, 0-this.height/6)
        line(0+this.width/6, 0-this.height/6, 0+this.width/6, 0+this.height/6)
        line(0-this.width/6, 0+this.height/6, 0-this.width/6, 0+this.height/2)
        
        pop();
    }
}