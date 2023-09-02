import { canvas, ctx, config } from './canvas';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Image
const spritesheet = new Image();
spritesheet.src = '../public/assets/spritesheet/shadow_dog_spritesheet.png';
const spriteWidth = 6876 / 12;
const spriteHeight = 5230 / 10;

// State
interface State {
  id: number;
  name: string;
  frames: number;
}

const states: State[] = [
  {
    id: 1,
    name: 'idle',
    frames: 7
  },
  {
    id: 2,
    name: 'jumpup',
    frames: 7
  },
  {
    id: 3,
    name: 'jumpdown',
    frames: 7
  },{
    id: 4,
    name: 'run',
    frames: 9
  }
]

// Animation
let frame = 0;
let currentState = 'run';
let stateObject = states.find((state: State) => state.name === currentState.toLowerCase());
let stageOrder = typeof stateObject !== 'undefined' ? stateObject.id - 1 : 0;
let maxFrame = typeof stateObject !== 'undefined' ? stateObject.frames : 1;
let gameFrame = 0;
let frameRateOrder = 3;

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let position = Math.floor(gameFrame/frameRateOrder) % maxFrame;
  frame = position;
  ctx.drawImage(spritesheet, frame * spriteWidth, stageOrder * spriteHeight, spriteWidth, spriteHeight, canvas.width / 2 - 250, canvas.height / 2 - 250, 500, 500);
  
  gameFrame++;
}

animate();
