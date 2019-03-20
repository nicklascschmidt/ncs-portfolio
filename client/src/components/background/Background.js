import React, { Component } from 'react';
import './background.css';

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
