class Pebble{
    constructor(x, y, width){
        var options={
            restitution:0.2,
            friction:3,
            density:500000
        }
        this.body=Bodies.circle(x, y, width, options);
        this.width=width;
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
        stroke(150, 150, 150);
        fill(150, 150, 150);
        ellipse(0, 0, this.width, this.width);
        pop();
    }
}