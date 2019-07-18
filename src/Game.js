import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 21 };
    this.singleKill = this.singleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <div>
        <h1 className='game__headline'>take it EZ, bruh</h1>
        <h3 className='game__score'>{this.state.score}</h3>
        <button className='game__kill' onClick={this.singleKill}>
          KILL
        </button>
      </div>
    );
  }
}

export default Game;
