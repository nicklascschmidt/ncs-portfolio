import React from 'react';
import NavLink from './NavLink';
import { FaBars, FaTimes } from "react-icons/fa";
import './nav-styles.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
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
        <NavLink toLink='/' displayTitle='NCS' brand={true}/>
        <NavbarToggler onClick={this.toggle} className='toggle-icon-container'>
          {this.state.isOpen ? <FaTimes /> : <FaBars />}
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
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