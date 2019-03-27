import React from "react";
import { Link } from 'react-router-dom';

class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        <p>Email: <a href='mailto:nicklas.c.schmidt@gmail.com'>nicklas.c.schmidt@gmail.com</a></p>
        <p>Github: <a href='https://github.com/nicklascschmidt' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/nicklascschmidt/' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
        <p>Phone number: <Link to='/resume'>*see resume*</Link></p>
      </div>
    );
  }
}

export default ContactInfo;
