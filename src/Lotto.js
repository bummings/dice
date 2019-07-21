import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lotto extends Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [22, 66, 44] };
  }

  handleClick() {
    console.log('ok bruh');
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
          Spin
        </button>
      </div>
    );
  }
}

export default Lotto;
