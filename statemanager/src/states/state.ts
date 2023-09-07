export const states = {
  STANDING_RIGHT: 0,
  STANDING_LEFT: 1
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
