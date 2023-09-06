import { canvas, ctx, config } from './canvas';
import { Particle } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
const particle = new Particle(canvas.width / 2, canvas.height / 2);

// Action

window.addEventListener('click', (event: MouseEvent) => {
  particle.x = event.clientX;
  particle.y = event.clientY;
});

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particle.update();
  particle.draw(ctx);
};

animate();
