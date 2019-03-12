import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import { FaBars } from "react-icons/fa";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';

// const ATagCustom = styled.a`
//   color: white;
//   margin: 0 10px;
//   :hover {
//     color: #74AA6F;
//     text-decoration-line: none;
//   }
// `;

const ToggleIconContainer = styled.div`
  color: white;
  display: 'flex';
  justify-content: center;
  align-items: center;
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar expand="sm" className='navbar-style'>
        <NavLink toLink='/' displayTitle='Nicklas Chen Schmidt' brand={true} margin='0'/>
        <NavbarToggler onClick={this.toggle}>
          <ToggleIconContainer>
            <FaBars />
          </ToggleIconContainer>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink toLink='/contact' displayTitle='Contact' />
            <NavLink toLink='/projects' displayTitle='Projects' />
            <NavLink toLink='/resume' displayTitle='Resume' />
            {/* <ATagCustom href='https://www.dropbox.com/s/c939lo0aeov3exs/NCS_Resume_Feb%202019.docx?dl=0' target='_blank' rel="noopener noreferrer">Resume</ATagCustom> */}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavBar;