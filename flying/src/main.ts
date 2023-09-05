import { canvas, ctx, config } from './canvas';
import { Enemy } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

const enemy = new Enemy(canvas.width / 2 - 15, canvas.height / 2 - 15, 30, 30);

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  enemy.move(1, 1);
  enemy.draw();
};

animate();
