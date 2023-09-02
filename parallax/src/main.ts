import { canvas, ctx, config } from './canvas';
import { Layer } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
const bgLayer1 = new Image();
bgLayer1.src = '/assets/image/background/layer-1.png';

const bgLayer2 = new Image();
bgLayer2.src = '/assets/image/background/layer-2.png';

const bgLayer3 = new Image();
bgLayer3.src = '/assets/image/background/layer-3.png';

const bgLayer4 = new Image();
bgLayer4.src = '/assets/image/background/layer-4.png';

const bgLayer5 = new Image();
bgLayer5.src = '/assets/image/background/layer-5.png';

let gameSpeed = 10;
let gameFrame = 0;

const layer1 = new Layer(bgLayer1, gameSpeed, 0.2);
const layer2 = new Layer(bgLayer2, gameSpeed, 0.4);
const layer3 = new Layer(bgLayer3, gameSpeed, 0.5);
const layer4 = new Layer(bgLayer4, gameSpeed, 0.9);
const layer5 = new Layer(bgLayer5, gameSpeed, 1.2);

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, config.width, config.height);
  layer1.update(gameSpeed, gameFrame);
  layer1.draw();
  layer2.update(gameSpeed, gameFrame);
  layer2.draw();
  layer3.update(gameSpeed, gameFrame);
  layer3.draw();
  layer4.update(gameSpeed, gameFrame);
  layer4.draw();
  layer5.update(gameSpeed, gameFrame);
  layer5.draw();
  gameFrame--;
};

animate();


