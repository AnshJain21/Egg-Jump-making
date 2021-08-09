
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1,basket2,basket3,basket4,Endbasket,egg,base1,base2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base=createSprite(400,350,800,750)
	base.shapeColor="black";
	base1=createSprite(200,600,1000,10);
	base2=createSprite(200,1,1000,1);
	egg=createSprite(70,300,30,30);
   basket1=createSprite(200,300,60,80);
   basket1.velocityY=4
   basket2=createSprite(300,300,60,80);
   basket2.velocityY=-6
   basket3=createSprite(400,300,60,80);
   basket3.velocityY=8
   basket4=createSprite(500,300,60,80);
   basket4.velocityY=-10
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  createEdgeSprites();
 basket1.bounceOff(base1);
 basket2.bounceOff(base1);
 basket3.bounceOff(base1);
 basket4.bounceOff(base1);
 basket1.bounceOff(base2);
 basket2.bounceOff(base2);
 basket3.bounceOff(base2);
 basket4.bounceOff(base2);
 //laser2.bounceOff(edges);
  egg.display();
  
  drawSprites();
 
}



