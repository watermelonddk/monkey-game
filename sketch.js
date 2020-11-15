var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, obstacleGroup;
var FoodGroup;
var score;
var ground;


function preload(){
  
monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  //creating monkey 
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale =0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX =-5;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  obstacleGroup = createGroup();
  monkeyGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
background(225); 
  
  spawnobstacles();
  
  spawnbananas();
   
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (keyDown("space"))
    monkey.velocityY =-12;
    monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
  }
  
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}
function spawnbananas() {
  //write code here to spawn the bananas
   if (frameCount % 80  === 0) {
     banana = createSprite(400,580,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;

    
    bananaGroup.add(banana);
    } 
}


function spawnobstacles() {
  //write code here to spawn the obstacles
   if (frameCount % 300  === 0) {
    obstacle = createSprite(800,327,10,40);
     obstacle.velocityX = -5;
  
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    

    
    obstacleGroup.add(obstacle);
    }
}



