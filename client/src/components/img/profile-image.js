import React, { Component } from 'react';
import './profile-image.css';

class ProfileImageComponent extends Component {
  render() {
    return (
      <div className='profile-image-container mb-1'>
        <img src={this.props.src} alt={this.props.alt} className='profile-image'></img>
      </div>
    )
  }
}

export default ProfileImageComponent;