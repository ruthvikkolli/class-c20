
var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
fixedrect=createSprite(400,100,80,50);
movingrect=createSprite(400,150,50,80);
movingrect.shapeColor="red"
fixedrect.shapeColor="teal"
}



function draw() {

background(0,0,0);

movingrect.y=mouseY
movingrect.x=mouseX
  drawSprites();
}


