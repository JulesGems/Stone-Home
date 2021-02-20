class Plank{
    constructor(x, y, width, height){
        var options={
            restitution:0.42,
            friction:5,
            density:1000000
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
        noStroke();
        fill(191, 145, 67);
        rect(0-this.width*9/20, 0, this.width/10, this.height);
        fill(186, 137, 58);
        rect(0-this.width*7/20, 0, this.width/10, this.height);
        fill(196, 149, 75);
        rect(0-this.width*5/20, 0, this.width/10, this.height);
        fill(190, 146, 65);
        rect(0-this.width*3/20, 0, this.width/10, this.height);
        fill(186, 143, 74);
        rect(0-this.width*1/20, 0, this.width/10, this.height);
        fill(173, 131, 62);
        rect(0+this.width*1/20, 0, this.width/10, this.height);
        fill(196, 147, 67);
        rect(0+this.width*3/20, 0, this.width/10, this.height);
        fill(184, 140, 70);
        rect(0+this.width*5/20, 0, this.width/10, this.height);
        fill(191, 145, 70);
        rect(0+this.width*7/20, 0, this.width/10, this.height);
        fill(189, 140, 61);
        rect(0+this.width*9/20, 0, this.width/10, this.height);
        
        pop();
    }
}