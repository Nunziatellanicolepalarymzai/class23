const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,380,400,20);
box1=new Box(240,100,50,100)
    box2=new Box(200,300,50,50)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
ground.display();
  box1.display();
  box2.display();
}