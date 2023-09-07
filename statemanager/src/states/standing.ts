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
  }

  handleInput(input: string) {
    if(input === 'PRESS left') this.player.setState(states.STANDING_LEFT);
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
  }

  handleInput(input: string) {
    if(input === 'PRESS right') this.player.setState(states.STANDING_RIGHT);
  }
};
