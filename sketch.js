
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumbledPaper;
var rect1;
var rect2;
var rect3;
var groundSprite;

function preload()

{
	
}

function setup() {
var canvas = createCanvas(900,700);

	engine = Engine.create();
	world = engine.world;

	crumbledPaper = new Paper();

	//Creating a box
	
	rect1 = new Box(700, 600, 200, 20);
	rect2 = new Box(800, 560, 20, 100);
	rect3 = new Box(600, 560, 20, 100);

	groundSprite=createSprite(width/2, height-70, width,20);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 600, width, 15 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
  rectMode(CENTER);

  crumbledPaper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crumbledPaper.body, crumbledPaper.body.position,{x : 30, y : -30});
	}

}





