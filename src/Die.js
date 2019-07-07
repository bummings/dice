import React, { Component } from 'react';

class Die extends Component {
  state = { number: 'one' };
  render() {
    return <i className={`die__singleDie fas fa-dice-${this.props.face}`} />;
  }
}

export default Die;
