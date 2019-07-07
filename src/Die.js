import React, { Component } from 'react';

class Die extends Component {
  state = { number: 'four' };
  render() {
    return (
      <div className='container'>
        {/* <i className='fas fa-dice-one' /> */}

        <i className={`die fas fa-dice-${this.state.number}`} />
      </div>
    );
  }
}

export default Die;
