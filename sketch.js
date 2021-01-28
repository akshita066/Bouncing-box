var card1, card2,card3,card4;
var mybox;
var edges;
var music;

function preload()
{
  music= loadSound("music.mp3")
}

function setup() 
{
  createCanvas(800,600);
  card1 = createSprite(70, 584, 200, 35);
  card1.shapeColor = "green";

  card2 = createSprite(280,584,200,35);
  card2.shapeColor = "red";

  card3 = createSprite(490,584,200,35);
  card3.shapeColor= "yellow"

  card4 = createSprite(700,584,200,35);
  card4.shapeColor= "blue"

  mybox = createSprite(Math.round(random(20,750)),30);
  mybox.height=30;
  mybox.width=30;
  mybox.shapeColor= "white";
  mybox.velocityY=10;
  mybox.velocityX=6;
}

function draw() 
{
  background("pink");  
  
  edges = createEdgeSprites();

  if (mybox.isTouching(card1))
  {
    mybox.shapeColor= "green";
  }

  if (mybox.isTouching(card2))
  {
    mybox.shapeColor= "red";
    music.play();
  }

  if (mybox.isTouching(card3))
  {
    mybox.shapeColor= "yellow";
    mybox.velocityX=0;
    mybox.velocityY=0;
    music.stop();
  }

  if (mybox.isTouching(card4)) 
  {
    mybox.shapeColor= "blue";
  }

  mybox.bounceOff(edges);
  mybox.bounceOff(card1);
  mybox.bounceOff(card2);
  mybox.bounceOff(card3);
  mybox.bounceOff(card4);
  


  drawSprites();
}
