function summation(radius) {
  this.radius = radius;
  this.returnPoint = {};
  this.update = function(coordinate, angle, n) {

    noFill();
    //    (r, g, b, a)
    stroke(0, 255, 0, 25);
    strokeWeight(4);

    let prevX = coordinate.x;
    let prevY = coordinate.y;
	
    // 4 * sin(n*angle) / n * PI
    this.radius = radius * (4 / (n * PI));
    this.wavePointY = this.radius * sin(n * angle);
    this.returnPoint.x += this.radius * cos(n * angle);
    this.returnPoint.y += this.radius * sin(n * angle);
	
	//draw circle
    circle(prevX, prevY, 2 * this.radius);
	
	//draw line from center to point
    stroke(255,255,0,75);
    line(prevX, prevY, this.returnPoint.x,this.returnPoint.y )
	
	//draw point on circle
    stroke(0);
    strokeWeight(5);
    stroke(255, 0, 0);	
    point(this.returnPoint.x, this.returnPoint.y);
	
    return this.returnPoint;
  }
}