import React, { Component } from 'react';

class Die extends Component {
  state = { number: 'six' };
  render() {
    return (
      <div className='die'>
        {/* <i className='fas fa-dice-one' /> */}
        <i className={`fas fa-dice-${this.state.number}`} />
      </div>
    );
  }
}

export default Die;
