/*This sets the boundary for the whole canvas*/
var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');


/*This sets the interval*/

var FPS = 30;
setInterval(function() {
  change();
  draw();
}, 1000/FPS);

/*This function change is defined in the inverval and cause changes and action*/
var textX = 50;
var textY = 50;

function change() {
  textX += 1;
  textY += 1;
}

/*This function actual places it on the canvas and implements the action from the changes/update functiom  */

function draw() {
  canvas.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);/*this stops it from reprinting*/

  canvas.fillStyle = "#000";
  canvas.fillText("Sup Bro!", textX, textY);
}

/*This function creates the actual player object */

var player = {
  color: "#00A",
  x: 220,
  y: 270,
  width: 32,
  height: 32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};
/*At this point, there is just a square, nothing is moving */

function draw() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
}



/*Right here: You need to save the hotkeys plugin and key status so that you can control your object */



function update() {
  if (keydown.left) {
    player.x -= 2;
  }

  if (keydown.right) {
    player.x += 2;
  }
};
