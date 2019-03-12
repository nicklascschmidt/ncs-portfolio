import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import { NavItem, NavbarBrand } from 'reactstrap';

const LinkContainerCustom = styled(LinkContainer)`
  margin: ${props => props.margin || '0 10px'};
  cursor: pointer;
  :hover {
    color: #74AA6F;
  }
`;

const BrandH4 = styled.h4`
  :hover {
    color: #74AA6F;
  }
`;

class NavLink extends React.Component {
  render() {
    return (
      <LinkContainerCustom to={this.props.toLink}>
        {this.props.brand ? 
        <NavbarBrand><BrandH4>{this.props.displayTitle}</BrandH4></NavbarBrand>
        :
        <NavItem>{this.props.displayTitle}</NavItem>
        }
      </LinkContainerCustom>
    )
  }
}

export default NavLink;