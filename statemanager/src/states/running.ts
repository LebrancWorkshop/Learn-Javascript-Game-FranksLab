import { Player } from "../components";
import { State, states } from "./state";

export class RunningRight extends State {
  player: Player;

  constructor(player: Player) {
    super('RUNNING RIGHT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 6;
    this.player.frameNumber = 9;
    this.player.speed = this.player.maxSpeed;
  }

  handleInput(input: string) {
    if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    else if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    else if(input === 'RELEASE right') this.player.setState(states.STANDING_RIGHT);
  }
};

export class RunningLeft extends State {
  player: Player;

  constructor(player: Player) {
    super('RUNNING LEFT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 7;
    this.player.frameNumber = 9;
    this.player.speed = -this.player.maxSpeed;
  }

  handleInput(input: string) {
    if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    else if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    else if(input === 'RELEASE left') this.player.setState(states.STANDING_LEFT);
  }
};
