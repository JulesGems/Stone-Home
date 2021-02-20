
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100, 100);
	brick1 = new Brick(112, 440, 80, 80);
	brick2 = new Brick(112, 360, 80, 80);
	brick3 = new Brick(688, 360, 80, 80);
	brick4 = new Brick(688, 440, 80, 80);
	stone1 = new Stone(194, 440, 80, 80);
	stone2 = new Stone(194, 360, 80, 80);
	stone3 = new Stone(194, 280, 80, 80);
	stone4 = new Stone(194, 200, 80, 80);
	stone5 = new Stone(194, 120, 80, 80);
	stone6 = new Stone(276, 120, 80, 80);
	stone7 = new Stone(358, 120, 80, 80);
	stone8 = new Stone(442, 120, 80, 80);
	stone9 = new Stone(524, 120, 80, 80);
	stone10 = new Stone(606, 120, 80, 80);
	stone11 = new Stone(606, 200, 80, 80);
	stone12 = new Stone(606, 280, 80, 80);
	stone13 = new Stone(606, 360, 80, 80);
	stone14 = new Stone(606, 440, 80, 80);
	plank1 = new Plank(280, 440, 80, 80);
	plank2 = new Plank(280, 360, 80, 80);
	plank3 = new Plank(280, 280, 80, 80);
	plank4 = new Plank(280, 200, 80, 80);
	plank5 = new Plank(360, 200, 80, 80);
	plank6 = new Plank(440, 200, 80, 80);
	plank7 = new Plank(520, 200, 80, 80);
	plank8 = new Plank(520, 280, 80, 80);
	plank9 = new Plank(520, 360, 80, 80);
	plank10 = new Plank(520, 440, 80, 80);
	plank11 = new Gold(360, 280, 80, 80);
	plank12 = new Gold(440, 280, 80, 80);
	plank13 = new Plank(400, 400, 160, 160);
	
	
	
	
	rubber = new Rubber(100, -500, 80);
	rubber2 = new Rubber(700, -500, 80);
	pebble = new Pebble(10, 50, 10);
	pebble2 = new Pebble(30, 50, 10);
	pebble3 = new Pebble(50, 50, 10);
	pebble4 = new Pebble(70, 50, 10);
	pebble5 = new Pebble(90, 50, 10);
	pebble6 = new Pebble(790, 50, 10);
	pebble7 = new Pebble(770, 50, 10);
	pebble8 = new Pebble(750, 50, 10);
	pebble9 = new Pebble(730, 50, 10);
	pebble10 = new Pebble(710, 50, 10);

	ground = new Ground(400, 600, 800, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 0, 0);
  

  hammer.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display();
  stone9.display();
  stone10.display();
  stone11.display();
  stone12.display();
  stone13.display();
  stone14.display();
  plank1.display();
  plank2.display();
  plank3.display();
  plank4.display();
  plank5.display();
  plank6.display();
  plank7.display();
  plank8.display();
  plank9.display();
  plank10.display();
  plank11.display();
  plank12.display();
  plank13.display();
  rubber.display();
  rubber2.display();
  pebble.display();
  pebble2.display();
  pebble3.display();
  pebble4.display();
  pebble5.display();
  pebble6.display();
  pebble7.display();
  pebble8.display();
  pebble9.display();
  pebble10.display();


  
  ground.display();
  drawSprites();
 
}



