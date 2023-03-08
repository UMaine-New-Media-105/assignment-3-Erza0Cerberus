Catcher

//Make a Catcher
function setup() {
  sonicHeight = 10;
  sonicWidth = 10;
  sonicX = 25;
  sonicY = 250;
  createCanvas(400, 400);
}

function draw() {
  // Draw the background.
  background("silver");
  addSonic(sonicX, sonicY);
}

function addSonic(x, y) {
  push();
  translate(25, 250);
  scale(0.3)
  noStroke();

  fill("dodgerblue");

  ellipse(150, 80, 40, 80);
  ellipse(250, 80, 40, 80);

  //ear insides
  fill("bisque");
  ellipse(150, 80, 20, 60);
  ellipse(250, 80, 20, 60);

  //quills

  fill("dodgerblue");
  ellipse(200, 225, 250, 340);

  //body
  fill("bisque");
  ellipse(200, 240, 200, 280);

  //head
  ellipse(200, 140, 150);

  //tummy
  fill("white");
  ellipse(200, 250, 100, 150);

  //paws
  fill("pink");
  ellipse(150, 200, 20, 35);
  ellipse(150, 300, 20, 35);
  ellipse(250, 200, 20, 35);
  ellipse(250, 300, 20, 35);

  //tail
  fill("bisque");
  ellipse(202, 380, 13, 30);

  //eyes

  fill("mediumspringgreen");

  ellipse(170, 100, 30, 30);
  ellipse(230, 100, 30, 30);

  //nose
  rotate(1);
  translate(10, -250);
  fill("black");
  ellipse(200, 130, 10, 25);

  pop();
}
