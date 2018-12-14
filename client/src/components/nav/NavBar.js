import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

import {
  Navbar,
  Nav,
} from 'reactstrap';

const NavbarCustom = styled(Navbar)`
  background-color: #6D4C3D;
  color: white;
  position: relative;
  margin: 0 0 20px 0;
`;

class NavBar extends React.Component {

  render() {
    return (
      <NavbarCustom>
        <NavLink toLink='/' displayTitle='Nicklas Chen Schmidt' brand={true} margin='0'/>
        <Nav className="ml-auto">
          <NavLink toLink='/contact' displayTitle='Contact' />
          <NavLink toLink='/projects' displayTitle='Projects' />
          <NavLink toLink='/resume' displayTitle='Resume' />
        </Nav>
      </NavbarCustom>
    )
  }
}

export default NavBar;