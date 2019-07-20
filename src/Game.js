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
        <h1 className='game__headline'>immutable state pattern</h1>
        <h3 className='game__score'>{this.state.score}</h3>
        <button className='game__kill' onClick={this.singleKill}>
          plus
        </button>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Game;
