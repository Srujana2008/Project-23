const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  base1 = new ComputerBase(20, 250, 200, 150);
  base2 = new PlayerBase(900, 250, 200, 150);
  player = new Player(20, 100, 80, 200);
  comPlayer = new Player(900, 100, 80, 200);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  base1.display();
  base2.display();
  //display Player and computerplayer
  player.display();
  comPlayer.display();

   

}
