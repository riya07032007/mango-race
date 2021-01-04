
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boy= loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 800);


	boy1= createSprite(100,600,10,10)
	boy1.addImage(boy)
	boy1.scale=0.1
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(70,690,20000,20)
	stone = new Stone(50,530,40)
	tree = new Tree(600,300,200,200)
	mango1 = new Mango(700,220,20)
	mango2 = new Mango(780,180,20)
	mango3 = new Mango(800,300,20)
	mango4 = new Mango(860,160,20)
	mango5 = new Mango(890,360,20)
	mango6 = new Mango(680,380,20)
	mango7 = new Mango(980,300,20)
	mango8 = new Mango(600,340,20)
	mango9 = new Mango(710,310,20)
	mango10 = new Mango(900,270,20)
	launcher = new Launcher(stone.body,{x:50,y:550})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
text(mouseX+','+mouseY,50,100)
  stone.display()
  ground.display()
  tree.display()
  launcher.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6) 
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
 
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly()
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
	Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:300,y:210})
		launcher.attach(stone.body)
	}
}



