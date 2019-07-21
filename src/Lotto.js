import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lotto extends Component {
  constructor(props) {
    super(props);
    this.state = { numbers: Array.from({ length: this.props.balls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState(currentState => ({
      numbers: currentState.numbers.map(n =>
        Math.floor(Math.random() * this.props.maxNum + 1)
      )
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div className='lotto'>
        <div className='lotto__balls'>
          {this.state.numbers.map(num => (
            <LottoBall number={num} />
          ))}
        </div>
        <button onClick={this.handleClick} className='lotto__btn'>
          Generate
        </button>
      </div>
    );
  }
}

export default Lotto;
