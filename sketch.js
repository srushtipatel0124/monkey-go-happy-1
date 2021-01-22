
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,600);
 monkey=createSprite(50,500,10,30);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(100,540,1200,20);
  ground.velocityX=-5;
  
FoodGroup=new Group();
  obstacleGroup=new Group();
  
  

  
}


function draw() {
background("white") ;
  if(keyDown("space")){
    monkey.velocityY=-10;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
 if(ground.x<0){
   ground.x=ground.width/2;
   
 }
 
  
spawnFood();
  spawnObstacles();
  
   
  monkey.collide(ground);
   if(obstacleGroup.isTouching(monkey)){
     ground.velocityX=0;
     monkey.velocityY=0;
     FoodGroup.setVelocityXEach(0);
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setLifetimeEach(-1);
     obstacleGroup.setLifetimeEach(-1);
   }
  score=score+Math.round(frameCount/80);
  text("score: "+score,500,50);
  
  
drawSprites();
  
}

function spawnFood(){
  if(frameCount%100===0){
banana=createSprite(600,100,10,10);
    banana.addImage("banana",bananaImage);
    banana.y=Math.round(random(120,250));
    banana.velocityX=-4;
    banana.lifetime=300;
    banana.scale=0.2;
    banana.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
    
    
    
    FoodGroup.add(banana);
    
  }
}


function spawnObstacles(){
  if(frameCount%200===0){
    obstacle=createSprite(600,500,20,10);
    
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-5;
    obstacle.lifetime=300;
    obstacle.scale=0.2
    obstacleGroup.add(obstacle);
    
  }
}

