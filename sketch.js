
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background,backgroundImg 
function preload()
{
backgroundImg = loadImage ("background.jpg")	
}

function setup() {
	createCanvas(windowHeight,windowWidth);
	background= createSprite (displayWidth/2-20,displayHeight/2-40,20,20)
	background.addImage (backgroundImg)
	background.scale=1.5

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Bunny=new bunny(600,200);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

   Bunny.display ();
  drawSprites();
 
}



