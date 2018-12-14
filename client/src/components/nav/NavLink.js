import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import { NavItem, NavbarBrand } from 'reactstrap';

const LinkContainerCustom = styled(LinkContainer)`
  font-family: 'Oswald', sans-serif;
  margin: ${props => props.margin || '0 10px'};
  cursor: pointer;
`;

class NavLink extends React.Component {
  render() {
    return (
      <LinkContainerCustom to={this.props.toLink}>
        {this.props.brand ? 
        <NavbarBrand><strong><h4 style={{marginBottom: 0, color: 'white'}}>{this.props.displayTitle}</h4></strong></NavbarBrand>
        :
        <NavItem>{this.props.displayTitle}</NavItem>
        }
      </LinkContainerCustom>
    )
  }
}

export default NavLink;