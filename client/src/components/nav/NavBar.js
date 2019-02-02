import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

import {
  Navbar,
  Nav,
} from 'reactstrap';

const NavbarCustom = styled(Navbar)`
  font-family: 'Oswald', sans-serif;
  background-color: #6D4C3D;
  color: white;
  position: relative;
  margin: 0 0 20px 0;
`;
const ATagCustom = styled.a`
  color: white;
  margin: 0 10px;
  :hover {
    color: #74AA6F;
    text-decoration-line: none;
  }
`;


class NavBar extends React.Component {

  render() {
    return (
      <NavbarCustom>
        <NavLink toLink='/' displayTitle='Nicklas Chen Schmidt' brand={true} margin='0'/>
        <Nav className="ml-auto">
          <NavLink toLink='/contact' displayTitle='Contact' />
          <NavLink toLink='/projects' displayTitle='Projects' />
          {/* <NavLink toLink='/resume' displayTitle='Resume' /> */}
          <ATagCustom href='https://www.dropbox.com/s/cpjug9annnph9kj/Resume_Feb%202019.docx?dl=0' target='_blank' rel="noopener noreferrer">Resume</ATagCustom>
        </Nav>
      </NavbarCustom>
    )
  }
}

export default NavBar;