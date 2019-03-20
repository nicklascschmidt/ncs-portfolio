import React from "react";
import './footer.css';

class FooterComponent extends React.Component {
  render() {
    return (
      <div className='footer-style p-3 mt-3'>
        <span><a className='footer-link' href='https://github.com/nicklascschmidt/ncs-portfolio' target='_blank' rel='noopener noreferrer'>Built and Designed</a> by Nicklas Chen Schmidt © 2019</span>
      </div>
    );
  }
}

export default FooterComponent;
