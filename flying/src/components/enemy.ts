import { ctx } from "../canvas";

export class Enemy {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    ctx.fillStyle = 'White';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy; 
  }
};
