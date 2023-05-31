/*
this will have all game rules/functions
will most likely import all other classes into this file
Start game
Out of bounds
Levels? - may put into other file?
End game

crazy future ideas!!
Turn game objects into 3d with three.js
vvv -- Super breakout -- vvv
ball starts in center of 3d object made from bricks
make bricks transparent or keep solid?
you rotate the bricks around the ball as it ricochets around inside
if the ball gets outside of bricks you lose
speed increase on hit
*/

let fx;
let loop;
let fps = 1000 / 60;

window.onload = function () {
  fx = new Fx('canvas');
  paddle = new Paddle(fx);
  start();
}

window.onresize = function () {
  init();
}

function init() {
  fx.setCanvasToPageSize();
  paddle.init();
}

function start() {
  init();
  loop = setInterval(update, fps);
}

function update() {
  move();
  draw();
}

function draw() {
  fx.fillcanvas('#2c3e50')
  paddle.draw();
}

function move() {
  console.log('move everything');
}
