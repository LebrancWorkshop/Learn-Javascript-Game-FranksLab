export const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1
};

export class State {
  state: string;

  constructor(state: string) {
    this.state = state;
  }

  enter() {

  }

  handleInput(input: string) {

  }
};
