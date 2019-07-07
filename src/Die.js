import React, { Component } from 'react';

class Die extends Component {
  state = { number: 24 };
  render() {
    return (
      <div className='die'>
        {/* <i className='fa fa-bath fa-1' aria-hidden='true' />
        <i className='fa fa-hourglass' aria-hidden='true' />
        <i className='fa fa-hourglass-start' aria-hidden='true' />
        <i className='fa fa-hourglass-half' aria-hidden='true' />
        <i className='fa fa-hourglass-end' aria-hidden='true' />
        <i className='fa fa-hourglass-o' aria-hidden='true' /> */}
        {/* <h1 className='die__number'>{this.state.number}</h1> */}
        <i className='fas fa-dice-one' />
      </div>
    );
  }
}

export default Die;
