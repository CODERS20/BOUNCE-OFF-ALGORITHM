var fixedRect, movingRect, circle,square;

function setup() {
  createCanvas(1200,1200);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //obj2.debug = true;
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //obj1.debug = true;

  circle = createSprite(900,600,50,50);
  circle.shapeColor = "yellow";

  square = createSprite(300,600,50,50);
  square.shapeColor  = "yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  circle.velocityX = -2;
  square.velocityX = 2;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(circle,square);

  drawSprites();
}

function bounceOff (obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj1.velocityX = obj1.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
  obj1.velocityY = obj1.velocityY * (-1);
  obj2.velocityY = obj2.velocityY * (-1);
}
}