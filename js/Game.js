class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    user1 = createSprite(100,200);
    user1.addAnimation("user1",user1_img);
    user2 = createSprite(300,200);
    user2.addAnimation("user2",user2_img);
    user3 = createSprite(500,200);
    user3.addAnimation("user3",user3_img);
    user4 = createSprite(700,200);
    user4.addAnimation("user4",user4_img);
    users = [user1, user2, user3, user4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getusersAtEnd();

    
    
    if(allPlayers !== undefined){
      
      
   //   image(track, 0,-displayHeight*4,displayWidth*5, displayHeight*5);
      // image(grass_down,0,-displayHeight)
      
     // image(grass_up,0,0)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the users
      var x = 200;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
         allPlayers[plr].distanceX += 200;

        //position the users a little away from each other in x direction
        x = displayWidth - allPlayers[plr].distanceX;
        //use data form the database to display the users in y direction
        y = displayHeight - allPlayers[plr].distanceY;
        users[index-1].x = x;
        users[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("white");
          ellp = ellipse(x,y,60,60);
          users[index - 1].shapeColor = "white";
          camera.position.x = users[index-1].x;
          camera.position.y = users[index-1].y;


           if(keyDown(32) && keyDown(68) && player.index !== null){
             if(frameCount%8 === 0){
            shoot = createSprite(users[index-1].x,users[index-1].y)
            shoot.addImage("shoot",shootImg)
            shoot.velocityX = 20
            console.log("shoot")
             }
          }

          if(keyDown(32) && keyDown(65) && player.index !== null){
             if(frameCount%8 === 0 ){
            shoot = createSprite(users[index-1].x,users[index-1].y)
            shoot.addImage("shoot",shootImg)
            shoot.velocityX = -20
            console.log("shoot")
             }
          }

        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distanceY -=10
      player.update();
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distanceY +=10
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distanceX +=10
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distanceX -=10
      player.update();
    }

    if(player.distanceY > 3000){
      gameState = 2;
      player.rank +=1
      Player.updateusersAtEnd(player.rank)
    }

    if(player.distanceX > 3000){
      gameState = 2;
      player.rank +=1
      Player.updateusersAtEnd(player.rank)
    }

    if(player.distanceY<1390 && player.distanceX<1720 && player.distanceX>940){
       var rand = random(-10,10);
       console.log(rand + "ran")
       if(frameCount%8 === 0){
        shoot2 = createSprite(enemy.x, enemy.y + rand);
        shoot2.velocityX = 20
        shoot2.addImage("shoot",shootImg)
        shoots.add(shoot2)
        }
            console.log(shoots.x)
    }

 

        if(player.distanceY<1260 && player.distanceX<1720 && player.distanceX>940){
          enemy.y = displayHeight- 1300 + 25
        }
        if(player.distanceY<1100 && player.distanceX<1720 && player.distanceX>940){
          enemy.y = displayHeight- 1300 + 35
        }   

    if(player.distanceY < -3000){
      gameState = 2;
      player.rank +=1
      Player.updateusersAtEnd(player.rank)
    }

    if(player.distanceX < -3000){
      gameState = 2;
      player.rank +=1
      Player.updateusersAtEnd(player.rank)
    }
      ground.visible = true;
      ground2.visible = true;
       
     console.log(player.distanceX);
    console.log(player.distanceY + "Y");

if(player.distanceY <= sfence.distanceY){
  console.log("touch")
  player.distanceY = player.distanceY + 10
}

if(player.distanceX <= box.distanceX  && player.distanceY<80){
  console.log("touch")
  player.distanceX = player.distanceX + 10
}

if(player.distanceX >= 820  && player.distanceY<1390 && player.distanceY>=710){
  console.log("touch")
  player.distanceX = player.distanceX - 10
}

if(player.distanceX < 900 && player.distanceX >860 && player.distanceY<1410 && player.distanceY>=750){
  console.log("touch")
  player.distanceY = player.distanceY + 10
}


// if(shoot.position.x <= box.position.x  && shoot.position.y<80){
//   console.log("destroy")
// }

if(player.distanceX <= -100 && player.distanceY<200){
  console.log("touch")
  player.distanceX = player.distanceX + 10
}

if(player.distanceX <= -40 && player.distanceY<330  && player.distanceY>210){
  console.log("touch")
  player.distanceX = player.distanceX + 10
}

if(player.distanceY > 685 && player.distanceY<720 && player.distanceX < 1810 && player.distanceX > 810){
   console.log("isTouching")
  player.distanceY = player.distanceY - 10
}

if(player.distanceY === 310 || player.distanceY === 320|| player.distanceY === 330 ){
  console.log("touch")
  player.distanceY = player.distanceY + 50
}

if(player.distanceX >=288 && player.distanceY<80){
  console.log("touch")
  player.distanceX = player.distanceX - 10
}

if(player.distanceX >= 290 && player.distanceY<200){
  console.log("touch")
  player.distanceX = player.distanceX - 10
}

if(player.distanceX >= 270 && player.distanceY<330 && player.distanceY>=210){
  console.log("touch")
   player.distanceX = player.distanceX - 10
}

if(player.distanceX >= 380 && player.distanceY<=570){
  console.log("touch")
  player.distanceX = player.distanceX - 10
}

if(player.distanceX <= -230  && player.distanceY<=540){
  console.log("touch")
  player.distanceX = player.distanceX + 10
}

if(player.distanceY<=570 && player.distanceX < -260 && player.distanceX > -1960){
   console.log("isTouching")
  player.distanceY = player.distanceY + 10
}

if(player.distanceY<=580 && player.distanceX > 415 && player.distanceX < 1960){
  console.log("isTouching")
  player.distanceY = player.distanceY + 10
}

if(player.distanceX > 1930){
  console.log("isTouching")
  player.distanceX = player.distanceX - 10
}

if(player.distanceX < -1930){
  console.log("isTouching")
  player.distanceX = player.distanceX + 10
}

ground3.visible = true;
ground4.visible = true;

    drawSprites();
  }

  end(){
    console.log("Game Ended");

  }
}
