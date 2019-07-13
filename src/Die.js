import React, { Component } from 'react';

class Die extends Component {
  state = { number: 'one' };
  render() {
    return (
      <div>
        <i className={`die__singleDie fas fa-dice-${this.props.face}`} />
      </div>
    );
  }
}

export default Die;
