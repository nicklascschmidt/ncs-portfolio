import React, { Component } from 'react';
require('./background.scss');

class Background extends Component {
  render() {
    return (
      <div className='background-style'>
        {this.props.children}
      </div>
    )
  }
}

export default Background;
