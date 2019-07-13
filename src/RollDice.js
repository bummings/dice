import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'two' };
  }

  roll() {
    Math.floor(Math.random() * this.props.sides.length);
  }

  // set state with those number
  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll}>Roll Di?</button>
      </div>
    );
  }
}

export default RollDice;
