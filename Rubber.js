class Rubber{
    constructor(x, y, width, height){
        var options={
            restitution:1.1,
            friction:2.5,
            density:100000
        }
        this.body=Bodies.circle(x, y, width, options);
        this.width=width;
        this.height=height;
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
        stroke("blue");
        fill("blue");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}