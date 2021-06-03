var player, monster, bow, arrow, playerImg, arrowImg, bowImg, monsterImg, x, ground
function preload(){
   playerImg = loadImage("boy.png");
   arrowImg = loadImage("arrow.png");
   bowImg = loadImage("bow.png");
   monsterImg = loadImage("monster.png");
}
function setup(){
    createCanvas(1200,400);
    imageMode(CENTER);
    player = createSprite(200,300,100,150);
    player.visible = false;
    ground = createSprite(600,390,1200,20);
    

}

function draw(){
    player.velocityY = 2;
    background("white");
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+2
    } 

    if(keyDown(LEFT_ARROW)){
        player.x = player.x -2
    } 

    if(keyDown(UP_ARROW)){
   player.velocityY = -10
    }

       image(playerImg, player.x,player.y,200,300);
       image(bowImg, player.x+100,player.y,70,150);

//       console.log(player.y)
//var c =ground.y-player.y 
if(player.y >=300){
    player.y = 300
}

    if(keyWentDown("space")){
        arrowImg.scale = 0.2
        arrow = createSprite(player.x+100,player.y,1,1);
        
     //   image(bowImg, bow.x,bow.y,70,150);   
    }
    if(keyWentUp("space")){
arrow.velocityX = 3;
arrow.addImage(arrowImg);
    }
drawSprites();
}