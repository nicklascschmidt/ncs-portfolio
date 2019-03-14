import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './nav-styles.scss';

import { NavItem, NavbarBrand } from 'reactstrap';

class NavLink extends React.Component {
  render() {
    return (
      <LinkContainer className='link-container-style mx-1' to={this.props.toLink}>
        {this.props.brand ? 
        <NavbarBrand><h4>{this.props.displayTitle}</h4></NavbarBrand>
        :
        <NavItem>{this.props.displayTitle}</NavItem>
        }
      </LinkContainer>
    )
  }
}

export default NavLink;