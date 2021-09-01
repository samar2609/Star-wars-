var tie, tieIMG
var millennium, millenniumImg
var background,backgroundImg
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
millenniumImg = loadImage("Millennium Falcon .jpeg")
tieIMG = loadImage("Tie fighter.jpeg")
backgroundImg = loadImage("Space star wars.jpeg")
}

function setup() {
 createCanvas(600,600)

 background = createSprite(100,100)
 background.addImage("background",backgroundImg)
 background.scale = 0.5
 
 
 

 tie = createSprite(300,200)
tie.addImage("tie",tieIMG)
tie.scale = 0.25
tie.velocityY = -1

tie = createSprite(300,250)
tie.addImage("tie",tieIMG)
tie.scale = 0.25

tie = createSprite(400,200)
tie.addImage("tie",tieIMG)
tie.scale = 0.25
tie.velocityY = -1

tie = createSprite(450,350)
tie.addImage("tie",tieIMG)
tie.scale = 0.25


tie = createSprite(400,200)
tie.addImage("tie",tieIMG)
tie.scale = 0.25


tie = createSprite(500,200)
tie.addImage("tie",tieIMG)
tie.scale = 0.25

millennium = createSprite(25,50)
 millennium.addImage("millennium",millenniumImg)
 millennium.scale = 0.3
 millennium.depth = tie.depth
 millennium.depth += 1;
}

function draw() {
 
if(tie.isTouching(millennium)){
    millennium.destroy
}

if(keyDown("Right_Arrow"))(
    millennium.x = millennium.x +5
)

if(keyDown("Left_Arrow"))(
    millennium.x = millennium.x -3

)








    drawSprites()
}

// The story is that the millenium falcon sees a opening and tries to get out two other ship try to stop him but crash and get out
// of the canvas while the falcon gets out of the canvas to escape