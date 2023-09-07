import { InputHandler } from './action';
import { canvas, ctx, config } from './canvas';
import { Player } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
window.addEventListener('load', () => {
  const player = new Player(500, 500);
  const input = new InputHandler();

  function animate() {
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(input.lastKey);
    player.draw(ctx);
  }

  animate();
});
