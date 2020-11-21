const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World =Matter.World;
const Events=Matter.Events;
var backgroungImg 
var world,engine;
var shoots, ellp;
var canvas, backgroundImage;
var road,roadImg;
var gameState = 0;
var playerCount;
var allPlayers;
var distanceY = 0;
var distanceX = 0;
var database;
var ground, groundImage;
var ground2, ground3;
var groundImage3
var door, doorImg;
var side
var sfence,sfenceIMg;
var form, player, game;
var grass_up, grass_down, grass_left,grass_right;
var users, user1, user2, user3, user4;
var bricks, bricks2, brickImg;
var brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10;
var track, user1_img, user2_img, user3_img, user4_img;
var box, box2;
var outImg, outline;
var shoot, shootImg;
var shoot2;
var tree, treeImg;
var enemy, enemyImg;
var formImg


function preload(){
  track = loadImage("images/ground.png");
  grass_down = loadImage("images/grass.jpg");
  grass_up = loadImage("images/grass.jpg");
  user1_img = loadAnimation("images/3.png","images/2.png","images/1.png");
  user2_img = loadAnimation("images/3.png","images/2.png","images/1.png");
  user3_img = loadAnimation("images/3.png","images/2.png","images/1.png");
  user4_img = loadAnimation("images/3.png","images/2.png","images/1.png");
  groundImage = loadImage("images/block.jpg");
  groundImage2 = loadImage("images/block2.jpg");
  groundImage3 = loadImage("images/block3.jpg");
  brickImg = loadImage("images/brick.png");
  doorImg = loadImage("images/gate.png");
  roadImg = loadImage("images/road.png");
  sfenceIMg = loadImage("images/small-fence.png");
  outImg = loadImage("images/bodder.png");
  shootImg = loadImage("images/shoot1.png");
  treeImg = loadImage("images/tree.png");
  enemyImg = loadAnimation("images/NPC.png", "images/Npc2.png");
  formImg = loadImage("images/form_bg.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  engine= Engine.create();
    world=engine.world

  database = firebase.database();

 shoots = createGroup(); 
 side = new Fence(displayWidth + 95, displayHeight - 170);
 side2 = new Fence(displayWidth + 95, displayHeight - 270);
 side3 = new Fence(displayWidth + 95, displayHeight - 370);

 side4 = new Fence2(displayWidth - 650, displayHeight - 165);
 side5 = new Fence2(displayWidth - 650, displayHeight - 265);
 side6 = new Fence2(displayWidth - 650, displayHeight - 365);
 

 tree = createSprite(displayWidth - 1475, displayHeight - 1100);
 tree.addImage(treeImg)
 
 enemy = createSprite(displayWidth - 1880,displayHeight- 1300)
 enemy.addAnimation("enemy",enemyImg)
//  shoot2 = createSprite(enemy.x, enemy.y);
//  shoot2.velocityX = -20
//  shoot2.addImage(shootImg)
 tree = createSprite(displayWidth - 1520, displayHeight - 1100);
 tree.addImage(treeImg)
 
 tree = createSprite(displayWidth - 1575, displayHeight - 1100);
 tree.addImage(treeImg)
 
 tree = createSprite(displayWidth - 1620, displayHeight - 1100);
 tree.addImage(treeImg)

 tree = createSprite(displayWidth - 1475, displayHeight - 1045);
 tree.addImage(treeImg)
 
 tree = createSprite(displayWidth - 1520, displayHeight - 1045);
 tree.addImage(treeImg)
 
 tree = createSprite(displayWidth - 1575, displayHeight - 1045);
 tree.addImage(treeImg)
 
 tree = createSprite(displayWidth - 1620, displayHeight - 1045);
 tree.addImage(treeImg)

  ground = createSprite(displayWidth - 1300, displayHeight - 540)
  ground.addImage(groundImage)
  ground.visible = false;

  ground2 = createSprite(displayWidth + 750, displayHeight - 520)
  ground2.addImage(groundImage)
  ground2.visible = false;


  ground3 = createSprite(displayWidth + 1100, displayHeight - 520)
  ground3.addImage(groundImage)
  ground3.visible = false;

  ground4 = new Ground(displayWidth - 1500, displayHeight - 540, 1350, 40)
  ground4.visible = false;

  ground5 = new Ground(displayWidth - 260, displayHeight - 740, 1300, 40)
  
  ground6 = createSprite(displayWidth - 1975, displayHeight - 1045)
  ground6.addImage("ground",groundImage3)
    
  ground6 = createSprite(displayWidth - 1080, displayHeight - 1045)
  ground6.addImage("ground",groundImage3)
  
  ground6 = createSprite(displayWidth - 1080, displayHeight - 1045)
  ground6.addImage("ground",groundImage3)

  ground9 = createSprite(displayWidth - 1650, displayHeight - 1400)
  ground9.addImage("ground",groundImage2)
  
  ground7 = createSprite(displayWidth - 1600, displayHeight - 740)
  ground7.addImage("ground",groundImage2)
  
  ground8 = createSprite(displayWidth - 1400, displayHeight - 740)
  ground8.addImage("ground",groundImage2)

  sfence = createSprite(displayWidth - 260, displayHeight + 180);
  sfence.distanceY = -110;
  sfence.addImage("fence",sfenceIMg);


  sfence2 = createSprite(displayWidth - 400, displayHeight + 180);
  sfence2.addImage("fence",sfenceIMg);

  road = createSprite(displayWidth-280,displayHeight + 400);
  road.addImage("fence",roadImg);

  bricks = new Brick(displayWidth + 540, displayHeight + 100);

  bricks2 = new Brick(displayWidth - 1100, displayHeight + 100)
  
  door =  createSprite(displayWidth - 300, displayHeight - 80, 10, 200);
  door.addImage("door",doorImg);

  box = createSprite(displayWidth , displayHeight + 100, 140, 250);
  box.distanceX = -70;
  box.visible = false;

  box2 = createSprite(displayWidth -200,displayHeight - 1200, displayWidth *2 + 1200, 1250);
  box2.visible = true;
  box2.addImage("bodder",outImg);

  brick3 = new Brick(displayWidth - 1100, displayHeight + 320);
  brick4 = new Brick(displayWidth + 540, displayHeight + 320);
  brick5 = new Brick(displayWidth + 550, displayHeight + 320);
  // brick6 = new Brick(displayWidth, displayHeight + 0);
  // brick7 = new Brick(displayWidth - 990, displayHeight + 120);
  // brick8 = new Brick(displayWidth + 990, displayHeight + 120);
  // brick9 = new Brick(displayWidth - 1980, displayHeight+ 120);
  // brick10 = new Brick(displayWidth + 1980, displayHeight+120);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  // if(backgroungImg === 1){
  //   background(form_bg);
  //   }
    background(formImg)
  Engine.update(engine);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    background(grass_down);
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  

   brick3.display();
   brick4.display();
   brick5.display();
  //  brick6.display();
  ground5.display();
  ground4.display();
   drawSprites();
}