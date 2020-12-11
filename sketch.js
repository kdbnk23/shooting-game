var player, opponent, bullets, bgImg, playerSpaceship, opponentSpaceship, bulletImg
var bulletGroup

function preload(){
bgImg=loadImage("images/wp4588406.jpg")
playerSpaceship=loadImage("images/playerSpace.png")
opponentSpaceship=loadImage("images/opponentSpace.png")
bulletImg=loadImage("images/unnamed.png")
}


function setup() {
  createCanvas(800,400);
  player=createSprite(400, 300, 50, 50);
  player.addImage(playerSpaceship)
  player.scale=0.1
  opponent=createSprite(400, 200, 50, 50); 
  opponent.addImage(opponentSpaceship)
  opponent.scale=0.05
  bulletGroup =createGroup();
  
}

function draw() {
  background(bgImg);  
  if (keyDown("space")){
    createBullet();
  }
  if (bulletGroup.isTouching(opponent)){
bulletGroup.destroyEach()
opponent.destroy()
  }
  drawSprites();
}

function createBullet(){
  var bullets=createSprite(400, 300, 5, 5);
  bullets.addImage(bulletImg)
  bullets.scale=0.04
  bullets.velocityX=0
  bullets.velocityY=-2
  bulletGroup.add(bullets)
  
}