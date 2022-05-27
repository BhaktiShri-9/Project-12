var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg,coin1Img,coin2Img,coin3Img,coin4Img,coin5Img,coin6Img,coin7Img,coin8Img,coin9Img,coin10Img;
var invisibleGround1,invisibleGround2;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coin1Img = loadImage("coin.png");
  coin2Img = loadImage("coin.png");
  coin3Img = loadImage("coin.png");
  coin4Img = loadImage("coin.png");
  coin5Img = loadImage("coin.png");
  coin6Img = loadImage("coin.png");
  coin7Img = loadImage("coin.png");
  coin8Img = loadImage("coin.png");
  coin8Img = loadImage("coin.png");
  coin10Img = loadImage("coin.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating coins
coin1 = createSprite(100,0);
coin1.addImage(coin1Img);
coin1.velocityY = 6;  
coin1.scale=0.2;

coin2 = createSprite(140,10);
coin2.addImage(coin2Img);
coin2.velocityY = 6;  
coin2.scale=0.2;

coin3 = createSprite(100,80);
coin3.addImage(coin3Img);
coin3.velocityY = 6;  
coin3.scale=0.2;

coin4 = createSprite(180,40);
coin4.addImage(coin4Img);
coin4.velocityY = 6;  
coin4.scale=0.2;

coin5 = createSprite(220,0);
coin5.addImage(coin5Img);
coin5.velocityY = 6;  
coin5.scale=0.2;

coin6 = createSprite(250,100);
coin6.addImage(coin6Img);
coin6.velocityY = 6;  
coin6.scale=0.2;

coin7 = createSprite(280,20);
coin7.addImage(coin7Img);
coin7.velocityY = 6;  
coin7.scale=0.2;

coin8 = createSprite(300,80);
coin8.addImage(coin7Img);
coin8.velocityY = 6;  
coin8.scale=0.2;

coin9 = createSprite(100,100);
coin9.addImage(coin7Img);
coin9.velocityY = 6;  
coin9.scale=0.2;

coin10 = createSprite(200,20);
coin10.addImage(coin7Img);
coin10.velocityY = 6;  
coin10.scale=0.2;


//creating boy running
boy = createSprite(180,340);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
invisibleGround = createSprite(370, 200, 100, 400);
invisibleGround.visible = false;

invisibleGround2 = createSprite(40, 200, 100, 400);
invisibleGround2.visible = false;

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
  path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/

if (boy.isTouching(coin1)) {
  coin1.destroy();
}
if (boy.isTouching(coin2)) {
  coin2.destroy();
}
if (boy.isTouching(coin3)) {
  coin3.destroy();
}
if (boy.isTouching(coin4)) {
  coin4.destroy();
}
if (boy.isTouching(coin5)) {
  coin5.destroy();
}
if (boy.isTouching(coin6)) {
  coin6.destroy();
}
if (boy.isTouching(coin7)) {
  coin7.destroy();
}
if (boy.isTouching(coin8)) {
  coin8.destroy();
}
if (boy.isTouching(coin9)) {
  coin9.destroy();
}
if (boy.isTouching(coin10)) {
  coin10.destroy();
}
  drawSprites();
}