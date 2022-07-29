let r;
let g;
let b;

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(512, 512);
  centerCanvas();
  background(0);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(255, 255, 255);
  ellipse(250, 470, 10, 10);

  fill(100, 20, 200);
  square(0, 0, 64);
  fill(150, 50, 200);
  square(64, 0, 64);
  fill(155, 200, 255);
  square(128, 0, 64);
  fill(255, 200, 240);
  square(0, 128, 64);
  fill("#0D8617");
  square(64, 64, 64);
  fill("#D48D3C");
  square(0, 0, 64);
}
