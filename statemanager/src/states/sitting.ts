import { Player } from "../components";
import { State, states } from "./state";

export class SittingRight extends State {
  player: Player;

  constructor(player: Player) {
    super('SITTING RIGHT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 8;
  }

  handleInput(input: string) {
    if(input === 'PRESS left') this.player.setState(states.SITTING_LEFT);
    else if(input === 'PRESS up') this.player.setState(states.STANDING_RIGHT);
  }
}

export class SittingLeft extends State {
  player: Player;

  constructor(player: Player) {
    super('SITTING LEFT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 9;
  }

  handleInput(input: string) {
    if(input === 'PRESS right') this.player.setState(states.SITTING_RIGHT);
    else if(input === 'PRESS up') this.player.setState(states.STANDING_LEFT);
  }
};
