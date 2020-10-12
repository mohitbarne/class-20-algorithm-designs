var ball, bat




function setup() {
  createCanvas(800,800);
  ball= createSprite(400, 200, 200, 100);
  bat = createSprite(300,400,200,70)

  ball.shapeColor ="yellow";
  bat.shapeColor ="yellow";



  
  ball.debug=true;
  bat.debug=true;
}


function draw() {
  background(255,255,255);
  ball.x=mouseX;
  ball.y=mouseY; 
  console.log(ball.x -bat.x)
  console.log(ball.width/2+bat.width/2)
  if(ball.x -bat.x < ball.width/2+bat.width/2
    && bat.x -ball.x < ball.width/2+bat.width/2
    && ball.y -bat.y < ball.height/2+bat.height/2
    && bat.y -ball.y < ball.height/2+bat.height/2){
    ball.shapeColor ="red";
    bat.shapeColor ="red";
  }
  else {
    ball.shapeColor ="yellow";
    bat.shapeColor ="yellow";

  }


  drawSprites();
}