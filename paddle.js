/*
this will have the paddle class and user control for paddle
movement logic
tied to refresh rate?
mouse movement?
keyboard?
phone/finger input?
use of left and right buttons could make movement simple on phone screen
*/

class Paddle {

  constructor(graphics) {
    this.fx = graphics;
    this.color = '#ecf0f1';
    this.xpos = 0;
    this.ypos = 0;
    this.widith = 0;
    this.height = 0;
  }

  init() {
    this.height = this.fx.height() * 0.05;
    this.width = this, fx.width() * 0.15;
    this.ypos = this.fx.height() * 0.95 - this.height / 2;
    this.xpos = this.fx.width() - this.width / 2;
  }

  draw() {
    this.fx.drawRect(this.xpos, this.ypos, this.width, this.height, this.color);
  }
}