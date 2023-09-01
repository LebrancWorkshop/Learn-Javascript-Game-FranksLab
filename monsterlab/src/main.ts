window.addEventListener('load', function() {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.width = 1280;
  canvas.height = 720;

  class Player {
    game: Game;
    collisionX: number;
    collisionY: number;
    collisionRadius: number;

    constructor(game: Game) {
      this.game = game;
      this.collisionX = this.game.width / 2;
      this.collisionY = this.game.height / 2;
      this.collisionRadius = 30;
    }

    draw(c: CanvasRenderingContext2D) {
      c.beginPath();
      c.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2, false);
      c.fill();
    }
  }

  class Game {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    player: Player;

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.player = new Player(this);
    }

    render(c: CanvasRenderingContext2D) {
      this.player.draw(c);
    }
  }

  const game = new Game(canvas);
  game.render(ctx);

  function animate() {

  }
});
