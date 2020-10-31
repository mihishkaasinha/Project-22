//Author : Mihishkaa Sinha
//Drop Supplies And Medical Kits In The Middle Of A Zombie Apocalypse.

//declare all the variables and constants
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//create the function preload for loading all the images
function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

//create the function setup
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//create a sprite for the package
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	//create a sprite for the helicopter
	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite=createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution : 0.6, isStatic : true });
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic : true } );
 	World.add(world, ground);


	Engine.run(engine);

}

//create the function draw
function draw()
{

  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y
  keyPressed()
  drawSprites();

}

//create the function keyPressed
function keyPressed() {
 if (keyCode === DOWN_ARROW)
 {
	Matter.Body.setStatic(packageBody, false);
 }
}