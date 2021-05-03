// function to draw the resulting wave
function wave() {
  this.update = function(wavePoints) {
    beginShape();
    for (let i = 0; i < wavePoints.length; i++) {
      stroke(255);
      strokeWeight(4);
      vertex(i, wavePoints[i]);
    }
    endShape();
  }
}