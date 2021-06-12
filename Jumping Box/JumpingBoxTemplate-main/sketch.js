var box1,box2,box3,box4;
var ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(100,590,180,20);
    box1.shapeColor="red";

    box2=createSprite(300,590,180,20);
    box2.shapeColor="green";

    box3=createSprite(500,590,180,20);
    box3.shapeColor="blue";

    box4=createSprite(700,590,180,20);
    box4.shapeColor="yellow";

    //create box sprite and give velocity
    ball=createSprite(random(15,740),300,20,20);
    ball.shapeColor="white";
    ball.velocityX=3;
    ball.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));
    if(ball.x<0){
        music.stop()
          ball.velocityX=3
      }else if(ball.x>800){
        music.stop()
          ball.velocityX=-3
      }
     
    if(isTouching(ball,box4)){
      music.play()
      ball.shapeColor="yellow";
      bounceOff(ball,box4)
      
    }
    
    else if(isTouching(ball,box3)){
      music.stop()
      ball.shapeColor="blue";
      bounceOff(ball,box3)
     
    }
      
    else if(isTouching(ball,box2)){
      music.stop()
      ball.shapeColor="green";
      bounceOff(ball,box2)
    }
    
    else if(isTouching(ball,box1)){
      music.stop()
      ball.shapeColor="red";
      bounceOff(ball,box1)
    }
  
    if (ball.y<0){
      music.stop()
      ball.velocityY=3
    }


    drawSprites();
}
