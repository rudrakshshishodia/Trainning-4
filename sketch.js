var bandar,animal,sher,forest;

function preload() {
  bandar=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png");
  sher=loadImage("Monkey_06.png");
}


function setup() {
  createCanvas(800,400);
  animal=createSprite(200,300,20,50);
  animal.scale=0.2;
  animal.addAnimation("jungle",bandar);
  forest=createSprite(400,200,50,20);
  forest.addImage("mandal",sher);
  forest.scale=0.2;
}


function draw() {

 if (keyDown("space")) {
   animal.velocityY=-9;
 }

  background(1);  
  drawSprites();
}

