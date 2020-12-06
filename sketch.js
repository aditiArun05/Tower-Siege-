const Engine=Matter.Engine
const World=Matter.World
const Bodies= Matter.Bodies
var engine,world
var ground1, box1,box2,box3,box4,box5,box6,box7,box8,box9,sling,ball

function setup() {
  createCanvas(800,700);
  //createSprite(800,500,800,10);
engine=Engine.create ()
world=engine.world
  ground1= new ground(700,500,800,10)
box1=new Box(680,470,50,50)
box2=new Box(625,470,50,50)
box3=new Box(570,470,50,50)
box4=new Box(515,470,50,50)
box5=new Box(460,470,50,50)
box6=new Box(570,416,50,50)
box7=new Box(625,416,50,50)
box8=new Box(515,416,50,50)
box9=new Box(570,360,50,50)
ball=new Box(200,416,30,30)
sling=new SlingShot(ball:box6)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box9.display()
  box8.display()
  drawSprites();
}