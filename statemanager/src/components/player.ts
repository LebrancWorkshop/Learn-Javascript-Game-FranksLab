import { canvas } from "../canvas";
import { State, StandingRight, StandingLeft } from "../states";

export class Player {
  gameWidth: number;
  gameHeight: number;
  states: State[];
  currentState: State;
  image: HTMLImageElement;
  width: number;
  height: number;
  x: number;
  y: number;
  frameX: number;
  frameY: number;

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.states = [
      new StandingRight(this),
      new StandingLeft(this)
    ];
    this.currentState = this.states[0];
    this.image = new Image();
    this.image.src = '/assets/image/spritesheet/dog.png';
    this.width = 1800 / 9;
    this.height = 2182 / 12;
    this.x = canvas.width / 2 - this.gameWidth / 2;
    this.y = canvas.height / 2 - this.gameHeight / 2;
    this.frameX = 0;
    this.frameY = 0;
  }

  draw(c: CanvasRenderingContext2D) {
    c.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.gameWidth, this.gameHeight);
  }

  update(input: string) {
    this.currentState.handleInput(input);
  }

  setState(state: number) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
};
