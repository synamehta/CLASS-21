var garima,syna;
var a,b,c,d;

function setup() {
  createCanvas(500,500);

  garima=createSprite(400, 200, 50, 50);
  garima.shapeColor="green";
  garima.debug=true;
  
  syna=createSprite(250,250,100,100);
  syna.shapeColor="green";
  syna.debug=true;

  a=createSprite(100,100,50,50);
  a.shapeColor="green";
  a.debug=true;

  b=createSprite(400,100,50,50);
  b.shapeColor="green";
  b.debug=true;

  c=createSprite(400,400,50,50);
  c.shapeColor="green";
  c.debug=true;

  d=createSprite(100,400,50,50);
  d.shapeColor="green";
  d.debug=true;
}

function draw() {
  background("blue");

  garima.y=mouseY
  garima.x=mouseX; 

  if(touching(a,garima)){
    garima.shapeColor="red";
    a.shapeColor="red";
  }
  else{
    garima.shapeColor="green";
    a.shapeColor="green";
  }

  drawSprites();
}

