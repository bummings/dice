import React, { Component } from 'react';

class LottoBall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className='lotto__ball'>{this.props.number}</h1>
      </div>
    );
  }
}

export default LottoBall;
