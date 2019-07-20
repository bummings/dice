import React, { Component } from 'react';

class Lotto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='lotto'>
        <h1 className='lotto__number'>{this.props.number}</h1>
      </div>
    );
  }
}

export default Lotto;
