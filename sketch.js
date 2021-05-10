var skaterImg, skater, backgroundImg, invGround, obstacle1, obstacle2, obstacle3, obstacle4, point2, point3

function preload(){
skaterImg = loadAnimation("Images/skaterImg1.jpg","Images/skaterImg2.png", "Images/skaterImg3.png", "Images/skaterImg4.png","Images/skaterImg1.jpg","Images/skaterImg2.png", "Images/skaterImg3.png", "Images/skaterImg4.png")
backgroundImg = loadImage("Images/background.jpg")
obstacle1 = loadImage("Images/obstacle1.png")
obstacle2 = loadImage("Images/obstacle2.png")
obstacle3 = loadImage("Images/obstacle3.png")
obstacle4 = loadImage("Images/obstacle4.png")
point2 = loadImage("Images/point2.png")
point3 = loadImage("Images/point3.png")

}

function setup(){
createCanvas(1200,700)

background = createSprite(600,300,500,500)
background.addImage(backgroundImg)
background.scale = 2

skater = createSprite(150, 450)
skater.addAnimation("skater", skaterImg)

inviGround = createSprite(600,600, 1200, 20)
inviGround. visible = false
}

function draw(){
    background.velocityX =-3
    if(background.x <400){
    
        background.x = 700
    }

    // jump
    if(keyDown("space")&& skater.y>= 200){
skater.velocityY = -6
    }
    skater.velocityY = skater.velocityY+0.7
    skater.collide(inviGround)
    console.log(skater.y)
    obstacles()
    points()
        drawSprites()
    }
    
function obstacles(){
if(frameCount%200==0){
var obstacle = createSprite(300, 550)
obstacle.velocityX = -3

var rand = Math.round(random(1,4))
if (rand == 1){
obstacle.addImage(obstacle1)
}
if (rand == 2){
    obstacle.addImage(obstacle2)
    }

    if (rand == 3){
        obstacle.addImage(obstacle3)
        }

        if (rand == 4){
            obstacle.addImage(obstacle4)
            }
obstacle.scale = 0.2
}
}

function points(){
if(frameCount%100 ==0){
    var point = createSprite(400,350)
    point.velocityX = -4

    var rand = Math.round(random(2,3))
    if(rand == 2){
        point.addImage(point2)
    }

    if(rand == 3){
        point.addImage(point3)
    }
    point.scale = 0.2
}

}


   