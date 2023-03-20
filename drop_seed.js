let circleFalling = false;
let sonicX = 0;
let sonicY = 0;
let circleY = 0;
let circleX = 0;

//Make a Catcher
function setup() {
  sonicHeight = 5;
  sonicWidth = 5;
  createCanvas(400, 400);
}

function draw() {
  // Draw the background.
  background("lightcyan");

  fill(color("greenyellow"));
  rect(0, 350, 400, 250);

  addSonic(mouseX, mouseY);

  if (Math.floor(random() * 10) == 0 && !circleFalling) {
    circleFalling = true;
    circleX = Math.floor(random() * 400);
  }

  if (circleFalling) {
    noStroke();
    fill(color("gold"));
    circle(circleX, circleY, 10);
    circleY++;
  }

  if (circleY == 300) {
    circleFalling = false;
    circleY = 0;
  }

  //console.log(rotateSonic)
}

function addSonic(x, y) {
  push();
  if (y != 250) {
    y = 250;
  }

  translate(x - 50, y);
  scale(0.3);
  noStroke();

  if (mouseIsPressed) {
    fill("gold");
  } else {
    fill("dodgerblue");
  }

  ellipse(150, 80, 40, 80);
  ellipse(250, 80, 40, 80);

  //ear insides
  fill("bisque");
  ellipse(150, 80, 20, 60);
  ellipse(250, 80, 20, 60);

  //quills

  if (mouseIsPressed) {
    fill("gold");
  } else {
    fill("dodgerblue");
  }
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

  if (mouseIsPressed) {
    fill("red");
  } else {
    fill("mediumspringgreen");
  }

  ellipse(170, 100, 30, 30);
  ellipse(230, 100, 30, 30);

  //nose
  rotate(1);
  translate(10, -250);
  fill("black");
  ellipse(200, 130, 10, 25);

  pop();
}
