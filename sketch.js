const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world 

var ground, ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,380,800,50,ground_options);
  World.add(world,ground);
 var options = {
   restitution:1.0
 }
  ball = Bodies.circle(400,100,10, options);
  World.add(world,ball);
  console.log (ground);
  
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y, 800, 50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y, 10, 10)  
  drawSprites();
}