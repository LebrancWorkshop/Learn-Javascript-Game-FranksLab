import { Player } from "../components";
import { states, State } from "./state";

export class StandingRight extends State {
  player: Player;

  constructor(player: Player) {
    super('STANDING RIGHT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 0;
    this.player.frameNumber = 7;
    this.player.speed = 0;
  }

  handleInput(input: string) {
    if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    else if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    else if(input === 'PRESS down') this.player.setState(states.SITTING_RIGHT);
  }
};

export class StandingLeft extends State {
  player: Player;

  constructor(player: Player) {
    super('STANDING LEFT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 1;
    this.player.frameNumber = 7;
    this.player.speed = 0;
  }

  handleInput(input: string) {
    if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    else if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    else if(input === 'PRESS down') this.player.setState(states.SITTING_LEFT);
  }
};
