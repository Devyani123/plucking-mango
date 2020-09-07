
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boyImg;
var tree1;
var ground1;
var stone1;
var boy;
var sling1;
var mango1,mango2,mango3,mango4,mango5;




function preload()
{
	;
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy=createSprite(150,600,1,1);
	 boy.addImage(boyImg);
	 boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;

    ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    fill("brown")
    World.add(world, ground1);


	//Create the Bodies Here.
//	ground1 =new ground(1,700,800);
  tree1=new tree(400,300);
 stone1 =new stone(40,300,50);
 sling1=new sling(stone1.body,{x:110,y:540});
 mango1=new mango(500,350,50);
 mango2=new mango(600,350,50);
 mango3=new mango(570,470,50);
 mango4=new mango(650,450,50);
 mango5=new mango(590,400,50);
 mango6=new mango(400,450,50);
 mango7=new mango(470,450,50);
 mango8=new mango(650,450,50);
 mango9=new mango(650,300,50);
 mango10=new mango(700,450,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree1.display();
 // ground1.display();
 stone1.display();
 sling1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);
detectCollision(stone1,mango5);
detectCollision(stone1,mango6);
detectCollision(stone1,mango7);
detectCollision(stone1,mango8);
detectCollision(stone1,mango9);
detectCollision(stone1,mango10);


  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling1.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
 stoneBodyPosition=lstone.body.position;

var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.radius+lstone.radius){
	Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:110,y:540});
		sling1.attach(stone1.body);
		
	}
}