export class Particle {
  x: number;
  y: number;
  spriteWidth: number;
  spriteHeight: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  frame: number;
  pattern: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.spriteWidth = 1000 / 5;
    this.spriteHeight = 179;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.image = new Image();
    this.image.src = '/assets/image/spritesheet/particle.png';
    this.frame = 0;
    this.pattern = 0;
  }

  update() {
    this.frame++;
  }

  draw(c: CanvasRenderingContext2D) {
    c.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
};
