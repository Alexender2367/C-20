var movingrect, fixedrect;




function setup() {
  createCanvas(800,400);
  movingrect= createSprite(200,300);
  movingrect.shapeColor="Blue"
  fixedrect= createSprite(400,200);
  fixedrect.shapeColor="Blue"
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
   movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && 
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2                                                                
  ){

  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}
else{
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue" 
}

  drawSprites();
}

