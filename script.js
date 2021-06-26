
// DYNAMIC VARIABLES
var rowsUntil = 2;
var lastJ = 0;

function setup() {
  createCanvas(600, 600);

  stroke(0);
  strokeWeight(5);

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var diff = j - lastJ;
      if(random(100) < 10 && rowsUntil == 0 && diff >= 5) {
        var x = (i * 10) + 2.5;
        var y = (j * 10) + 2.5;
        point(x, y); // draw point
        lastJ = j;
      }
    }
    if(rowsUntil == 0) { // determine whether this row is ok to draw on
      rowsUntil = 2;
    } else {
      rowsUntil -= 1;
    }
    lastJ = 0; // reset spacing at the end of the row
  }
}

function draw() {
  /*
  do nothing here because
  it will lag lower end systems
  */
}
