import React from 'react';
import NavLink from './NavLink';
import { FaBars, FaTimes } from "react-icons/fa";
import './nav-styles.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
} from 'reactstrap';

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
        <NavLink toLink='/'>
          <NavbarBrand><h4>NCS</h4></NavbarBrand>
        </NavLink>
        <NavbarToggler onClick={this.toggle} className='toggle-icon-container'>
          {this.state.isOpen ? <FaTimes /> : <FaBars />}
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className='mx-2'>
              <a href='/#contact' className='nav-a-tag-style'>Contact</a>
            </NavItem>
            <NavLink toLink='/projects' displayTitle='Projects'>
              <NavItem>Projects</NavItem>
            </NavLink>
            <NavLink toLink='/resume'>
              <NavItem>Resume</NavItem>
            </NavLink>
            {/* <ATagCustom href='https://www.dropbox.com/s/c939lo0aeov3exs/NCS_Resume_Feb%202019.docx?dl=0' target='_blank' rel="noopener noreferrer">Resume</ATagCustom> */}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavBar;