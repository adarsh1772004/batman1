const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myWorld, myEngine
var thunderImg1, thunderImg2, thunderImg3, thunderImg4
var thunderSprite
var man
var manImg1, manImg2, manImg3, manImg4, manImg5, manImg6, manImg7, manImg8;
var drops=[]
var rain
function preload(){
    
    man_running=loadAnimation("walking_1.png"," walking_2.png","walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png")
    thunderImg1=loadImage("1.png")
    thunderImg2=loadImage("2.png")
    thunderImg3=loadImage("3.png")
    thunderImg4=loadImage("4.png")
}   

function setup(){
  createCanvas(400, 400)
  myEngine=Engine.create()
  myWorld=myEngine.world;
  man=createSprite(200, 250, 50, 50)
  man.addAnimation("running",man_running)
  man.scale=0.4


function draw(){
  background(0)
   Engine.update(myEngine)
   for(var i=1;i<=100;i=i+1)
{
 rain=new Rain()
drops.push(rain)
}
console.log(drops)
for(var i=0;i<drops.length;i=i+1)
{
drops[i].display()
}
}
    poulateThunder()
    drawSprites()
}   
function poulateThunder(){
  if (frameCount%40==0){

  
  thunderSprite=createSprite(300, 50, 50, 50)
  thunderSprite.x=Math.round(random(0, 400))
  var a=Math.round(random(1, 4))
  switch(a)
  {
    case 1:thunderSprite.addImage(thunderImg1)
    break;
    case 2:thunderSprite.addImage(thunderImg2)
    break;
    case 3:thunderSprite.addImage(thunderImg3)
    break;
    case 4:thunderSprite.addImage(thunderImg4)
    break;
  }
  thunderSprite.scale=0.2
  thunderSprite.lifetime=5
}
}
