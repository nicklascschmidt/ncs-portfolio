import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

// css
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

const fontColor = 'white';

const NavbarCustom = styled(Navbar)`
  background-color: #6D4C3D;
  color: ${fontColor};
  position: relative;
  margin: 0 0 20px 0;
  height: 45px;
`;

const NavbarBrandCustom = styled.h4`
  color: ${fontColor};
  position: absolute;
  bottom: 0;
`;

const LinkContainerCustom = styled(LinkContainer)`
  color: ${fontColor};
  padding: ${props => props.padding || 0};
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
`;


class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {
    return (
      <NavbarCustom>
        <LinkContainerCustom to="/" padding='100px 0 0 0'>
          <NavbarBrandCustom><strong>Nicklas Chen Schmidt</strong></NavbarBrandCustom>
        </LinkContainerCustom>
        <Nav className="ml-auto">
          <a href='#contact'>
            <NavItem>Contact2</NavItem>
          </a>
          <LinkContainerCustom to="/contact" padding='0 10px'>
            <NavItem>Contact</NavItem>
          </LinkContainerCustom>
          <LinkContainerCustom to="/projects" padding='0 10px'>
            <NavItem>Projects</NavItem>
          </LinkContainerCustom>
          <LinkContainerCustom to="/resume" padding='0 10px'>
            <NavItem>Resume</NavItem>
          </LinkContainerCustom>
        </Nav>
      </NavbarCustom>
    )
  }
}

export default NavBar;