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
let paddle;
let ball;
let bricks;

window.onload = function () {
  fx = new Fx('canvas');
  paddle = new Paddle(fx);
  ball = new Ball(fx);
  bricks = new Bricks(fx);
  addEventListener('mousemove', mouseMove);
  //start();
}

window.onresize = function () {
  init();
}

function init() {
  fx.setCanvasToPageSize();
  ball.init();
  paddle.init();
  bricks.init();
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
  fx.fillCanvas('#2c3e50')
  bricks.draw();
  ball.draw();
  paddle.draw();
}

function move() {
  ball.move();
  ball.collisions(paddle, bricks);
  if (bricks.isBrickCountZero() || ball.livesCount()) {
    gameOver();
  }
}

function mouseMove(event) {
  paddle.moveWithMouse(event);
}

function startGame() {
  let startDiv = document.getElementById('start');
  let gameCanvas = document.getElementById('canvas');
  let gameOver = document.getElementById('game-over');
  startDiv.style.display = 'none';
  gameCanvas.style.display = 'block';
  gameOver.style.display = 'none';
  start();
}

function gameOver() {

  let startDiv = document.getElementById('start');
  let gameCanvas = document.getElementById('canvas');
  let gameOver = document.getElementById('game-over');
  startDiv.style.display = 'none';
  gameCanvas.style.display = 'none';
  gameOver.style.display = 'block';

  bricks.reset();
  ball.reset();
  ball.lives = 3;
  clearInterval(loop);
}