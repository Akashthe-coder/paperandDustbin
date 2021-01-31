
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(700,670,1400,20)
	dustbini= new Dustbin1(1100,535)
	dustbinii= new Dustbin1(1340,535)
	dustbin2i= new Dustbin2(1220,650)
	paper1= new Paper(200,660)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbini.display();
  dustbinii.display();
  dustbin2i.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:480,y:-330});
	}
}

