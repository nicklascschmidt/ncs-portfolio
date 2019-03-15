import React from "react";
import CardComponent from '../../components/cards/Card';
import ContactForm from './ContactForm';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class ContactComponent extends React.Component {
  render() {
    return (
      <Row>
        <Col lg='4' className='mb-2'>
          <CardComponent header='Contact Info'>
            <p>Email: <a href='mailto:nicklas.c.schmidt@gmail.com'>nicklas.c.schmidt@gmail.com</a></p>
            <p>Github: <a href='https://github.com/nicklascschmidt' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
            <p>LinkedIn: <a href='https://www.linkedin.com/in/nicklascschmidt/' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
            <p>Phone number: <Link to='/resume'>*see resume*</Link></p>
          </CardComponent>
        </Col>
        <Col lg='8' className='mb-2'>
          <CardComponent header='Send an Email'>
            <ContactForm />
          </CardComponent>
        </Col>
      </Row>
    );
  }
}

export default ContactComponent;
