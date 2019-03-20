import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './nav-styles.css';

class NavLink extends React.Component {
  render() {
    return (
      <LinkContainer className='link-container-style mx-2' to={this.props.toLink}>
        {this.props.children}
      </LinkContainer>
    )
  }
}

export default NavLink;