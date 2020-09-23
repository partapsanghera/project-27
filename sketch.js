
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5

var roof;

var backgroundIMG
var chain,chain2,chain3,chain4,chain5;


function preload()
{
	backgroundIMG = loadImage("background.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	World.add(world,engine)

	bob1 = new Bob(300,350,50)
	bob2 = new Bob(350,350,50)
	bob3 = new Bob(400,350,50)
	bob4 = new Bob(450,350,50)
	bob5 = new Bob(500,350,50)

	roof =new Roof(400,150,275,20)

	chain= new Chain(roof.body,bob1.body);
	chain2= new Chain(roof.body,bob2.body);
	chain3= new Chain(roof.body,bob3.body);
	chain4= new Chain(roof.body,bob4.body);
	chain5= new Chain(roof.body,bob5.body);
  
  
	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundIMG);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

 
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}






