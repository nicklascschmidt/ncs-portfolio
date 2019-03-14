import React, { Component } from 'react';
import './profile-image.scss';

class ProfileImageComponent extends Component {
  render() {
    return (
      <div className='profile-image-container'>
        <img src={this.props.src} alt={this.props.alt} className='profile-image'></img>
      </div>
    )
  }
}

export default ProfileImageComponent;