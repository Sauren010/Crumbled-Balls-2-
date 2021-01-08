
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1;
var log2;
var log3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  log3 = new Dustbin(700,260,80,10);
  ground = new Ground(100,270,10000,10);
  paper = new Paper(200,200,7);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");


  log3.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-10});
  }
}