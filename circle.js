function summation(radius) {
  this.radius = radius;
  this.returnPoint = {};
  this.update = function(coordinate, angle, n) {

    noFill();
    //    (r, g, b, a)
    stroke(0, 255, 0, 25);
    strokeWeight(4);

    // 4 * sin(n*angle) / n * PI
    let prevX = coordinate.x;
    let prevY = coordinate.y;
    this.radius = radius * (4 / (n * PI));
    this.wavePointY = this.radius * sin(n * angle);
    this.returnPoint.x += this.radius * cos(n * angle);
    this.returnPoint.y += this.radius * sin(n * angle);
    circle(prevX, prevY, 2 * this.radius);
    stroke(255,255,0,75);
    line(prevX, prevY, this.returnPoint.x,this.returnPoint.y )
    stroke(0);
    strokeWeight(5);
    stroke(255, 0, 0);
    point(this.returnPoint.x, this.returnPoint.y);
    return this.returnPoint;

  }
}