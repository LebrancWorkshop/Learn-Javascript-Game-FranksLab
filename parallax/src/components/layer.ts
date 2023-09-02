import { ctx } from "../canvas";

export class Layer {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  speed: number;
  speedModifier: number;

  constructor(image: HTMLImageElement, gameSpeed: number, speedModifier: number) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }

  update(gameSpeed: number, gameFrame: number) {
    this.speed = gameSpeed * this.speedModifier;
    this.x = (gameFrame * this.speed) % this.width;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
};
