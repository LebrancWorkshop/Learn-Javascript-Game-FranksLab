export const states = {
  STANDING_RIGHT: 0,
  STANDING_LEFT: 1,
  SITTING_RIGHT: 2,
  SITTING_LEFT: 3,
  RUNNING_RIGHT: 4,
  RUNNING_LEFT: 5
};

export class State {
  state: string;

  constructor(state: string) {
    this.state = state;
  }

  enter() {
    console.log(`Entering ${this.state} state.`);
  }

  handleInput(input: string) {
    console.log(`Handling input: ${input}`);
  }

};
