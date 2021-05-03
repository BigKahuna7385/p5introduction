var angle = 0;
var coordinate = {};
var summation;
var wave;
var wavePoints = [];
var slider;

function setup() {
  createCanvas(500, 400);
  summation = new summation(50);
  wave = new wave();
  slider = createSlider(1, 30, 1);
  frameRate();
}

function draw() {
  background(0);
  coordinate.x = 0;
  coordinate.y = 0;
  translate(100, 200);
  for (let n = 0; n <= slider.value(); n++) {
    if (n % 2 == 0)
      continue;
    this.coordinate = summation.update(coordinate, angle, n);
  }
  stroke(0, 0, 255, 150);
  line(this.coordinate.x, this.coordinate.y, 150, this.coordinate.y)
  wavePoints.unshift(this.coordinate.y);
  if (wavePoints.length >250)
    wavePoints.pop();
  translate(150, 0);
  wave.update(wavePoints);
  angle += 0.02;
}