/*
  This file holds the brick class
  Bricks should:
  have location input
  health input
  on hit function
  remove self on hp 0
  have uniform size
*/

class Bricks {

  constructor(graphics) {
    this.fx = graphics;
    this.red = '#e74c3c'
    this.orange = '#e67e22'
    this.yellow = '#f1c40f'
    this.green = '#27ae60'
    this.color = this.green;

    this.brickWidth = 0;
    this.brickHeight = 0;
    this.brickGap = 0;
    this.columns = 11;
    this.rows = 8;
    this.grid = null;
    this.liveBricks = 0;
  }

  init() {
    this.reset();
  }

  reset() {
    this.brickWidth = Math.ceil(this.fx.width() / this.columns);
    this.brickHeight = this.fx.height() * 0.05;
    this.brickGap = this.fx.height() * 0.01;
    this.grid = Array(this.columns * this.rows);
    this.liveBricks = 0;

    for (let i = 0; i < this.columns * this.rows; i++) {
      this.grid[i] = true;
      this.liveBricks++;
    }
  }

  rowToAwwayIndex(col, row) {
    return col + this.columns * row;
  }

  isBrickAtColRow(col, row) {
    if (col >= 0 && col < this.columns && row >= 0 && row < this.rows) {
      let brickIndexUnderCoord = this.rowToAwwayIndex(col, row);
      return this.grid[brickIndexUnderCoord];
    }
    return false;
  }

  colorPicker(row) {
    this.color = this.green;
    swtich(row) {
      case 0:
      case 1:
      this.color = this.red;
      break;
      case 2:
      case 3:
      this.color = this.orange;
      break;
      case 4:
      case 5:
      this.color = this.yellow;
      break;
    }
  }
}