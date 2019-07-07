import React, { Component } from 'react';

class Die extends Component {
  state = { number: 'one' };
  render() {
    return (
      <div className='die__container'>
        <i className={`die fas fa-dice-${this.props.face}`} />
      </div>
    );
  }
}

export default Die;
