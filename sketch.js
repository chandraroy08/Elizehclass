var movingrect ,Fixedrect
var gameobject1,gameobject2

function setup() {
  createCanvas(800,400);
  Fixedrect= createSprite(200,200,50,50)
  Fixedrect.shapeColor="purple"
  movingrect=createSprite(200,200,50,50)
  movingrect.shapeColor="pink"
  
}

function draw() {
  movingrect.x= World.mouseX
  movingrect.y= World.mouseY

  if(movingrect.x-Fixedrect.x<movingrect.width/2+Fixedrect.width/2 && Fixedrect.x-movingrect.x<Fixedrect.width/2+movingrect.width/2&&
    movingrect.y-Fixedrect.y<movingrect.width/2+Fixedrect.width/2&& Fixedrect.y-movingrect.y<movingrect.width/2+Fixedrect.width/2){
    movingrect.shapeColor="yellow"
    Fixedrect.shapeColor="green"
  }
  else{
    movingrect.shapeColor="pink"
    Fixedrect.shapeColor="purple"
  }


  
  background(0,0,0);  
  drawSprites();
}











