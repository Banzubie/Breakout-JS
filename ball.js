/*
  This file holds the ball class
  Ball movement logic - should ball delete and replace itself to create movement?
  Impact logic - just reverse direction?
  Ball speed changes on impact?
*/

class Ball {
  constructor(graphics) {
    this.fx = graphics;
    this.color = '#ecf0f1';
    this.xpos = 0;
    this.ypos = 0;
    this.xvel = 0;
    this.yvel = 0;
    this.size = 0;
  }

  init() {
    this.size = this.fx.height() * 0.03;
    this.xpos = this.fx.width() / 2 - this.size / 2;
    this.ypos = this.fx.height() / 2 - this.size / 2;
    this.yvel = this.fx.width() * 0.05;
    this.xvel = 0;
  }

  reset() {
    this.init();
  }

  draw() {
    this.fx.drawRect(this.xpos, this.ypos, this.size, this.color);
  }
}