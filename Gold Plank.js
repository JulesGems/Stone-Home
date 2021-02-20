class Gold{
    constructor(x, y, width, height){
        var options={
            restitution:0.42,
            friction:5,
            density:1100000
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
        fill(191*4/3, 145*4/3, 67*4/3);
        rect(0-this.width*9/20, 0, this.width/10, this.height);
        fill(186*4/3, 137*4/3, 58*4/3);
        rect(0-this.width*7/20, 0, this.width/10, this.height);
        fill(196*4/3, 149*4/3, 75*4/3);
        rect(0-this.width*5/20, 0, this.width/10, this.height);
        fill(190*4/3, 146*4/3, 65*4/3);
        rect(0-this.width*3/20, 0, this.width/10, this.height);
        fill(186*4/3, 143*4/3, 74*4/3);
        rect(0-this.width*1/20, 0, this.width/10, this.height);
        fill(173*4/3, 131*4/3, 62*4/3);
        rect(0+this.width*1/20, 0, this.width/10, this.height);
        fill(196*4/3, 147*4/3, 67*4/3);
        rect(0+this.width*3/20, 0, this.width/10, this.height);
        fill(184*4/3, 140*4/3, 70*4/3);
        rect(0+this.width*5/20, 0, this.width/10, this.height);
        fill(191*4/3, 145*4/3, 70*4/3);
        rect(0+this.width*7/20, 0, this.width/10, this.height);
        fill(189*4/3, 140*4/3, 61*4/3);
        rect(0+this.width*9/20, 0, this.width/10, this.height);
        
        pop();
    }
}