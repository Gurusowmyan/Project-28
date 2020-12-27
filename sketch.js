
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg , boy;
var stone , stoneImg;
var mango , mangoImg;
var mango1,mango2,mango3,mango4;
var tree ,treeImg;

function preload()
{
	boyImg =loadImage("Plucking mangoes/boy.png");
	stoneImg=loadImage("Plucking mangoes/stone.png");
	mangoImg =loadImage("Plucking mangoes/mango.png");
	treeImg =loadImage("Plucking mangoes/tree.png");
}

	function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,600,20,20);
	boy.addImage(boyImg);
	boy.scale =0.1;

	stone = new Stone(180,600,20);
	tree = new Tree();
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    
    function mouseReleased() {
      stone.fly()
    }    



