var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle
var cloud, cloudsGroup, cloudImage;
var score = 0
var obstaclesGroup
var PLAY=1
var END=0
var gameState=PLAY
//var gameState="play "

var newImage;

function preload(){
  //Animation:running images 
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 // one pic file to one variable 
  obstacleImage1 = loadImage("obstacle1.png")
  obstacleImage2 = loadImage("obstacle2.png")
  obstacleImage3 = loadImage("obstacle3.png")
  obstacleImage4 = loadImage("obstacle4.png")
  obstacleImage5 = loadImage("obstacle5.png")
  obstacleImage6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  console.log ("U R GAE")
  //+ used concatenate  two strings 
  console.log("hello"+" world")

  cloudsGroup=new Group();
  obstaclesGroup=new Group()

  
}

function draw() {
  background(180);
  //To display the Score:0
  fill("red")
  text("Score:"+score,530,50)
  
  
if(gameState === PLAY){
  score=score+(Math.round(frameCount/60))
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
    
  }
  
  trex.velocityY = trex.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  spawnClouds();
  spawnObstacles ();

if(trex.isTouching(obstaclesGroup))
{
  gameState = END
}

  
}
else if(gameState===END){
ground.velocityX = 0
ground.velocityY = 0
obstaclesGroup.setVelocityEach(0)
cloudsGroup.setVelocityEach(0)
trex.addAnimation("running", trex_collided);
}


  

  
 
  
  trex.collide(invisibleGround);
  
  //spawn the clouds

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    cloud.lifetime=200
    cloudsGroup.add(cloud)
    }
}
function spawnObstacles() {
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,165,10,40)
    
obstacle.velocityX = -6
var rand = Math.round(random(1,6))

switch(rand){
  
    case 1:
    obstacle.addImage(obstacleImage1)
    break;
    case 2:
    obstacle.addImage(obstacleImage2)
    break;
    case 3:
    obstacle.addImage(obstacleImage3)
    break;
    case 4:
    obstacle.addImage(obstacleImage4)
    break;
    case 5:
    obstacle.addImage(obstacleImage5)
    break;
    case 6:
    obstacle.addImage(obstacleImage6)
    break;
    default:
    break;

  }   

 obstacle.scale = 0.5 
obstacle.depth = trex.depth
trex.depth = trex.depth +1
obstacle.lifetime = 200
 obstaclesGroup.add(obstacle)
  }
  
}
