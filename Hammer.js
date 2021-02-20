class Hammer{
    constructor(x, y){
        var options={
            density:500000,
            friction:12.0,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x, y, 220, 20, options);
        this.body2=Bodies.rectangle(x+110, y, 80, 120);
        this.width=110;
        this.height=10;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("tan");
        fill("tan");
        rect(0, 0, 220, 20);
        stroke(40, 40, 40);
        fill(50, 50, 50);
        rect(110, 0, 80, 120);
        pop();
    }
}