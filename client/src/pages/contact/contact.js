import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import ContactForm from '../../components/contactForm/ContactForm';
import { Container, Row } from 'reactstrap';
import ColComponent from '../../components/grid/ColComponent';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Contact'/>
        <Container>
          <Row>
            <ColComponent md='12' lg='4'>
              <CardComponent header='Contact Info'>
                <p>Email: <a href='mailto:nicklas.c.schmidt@gmail.com'>nicklas.c.schmidt@gmail.com</a></p>
                <p>Github: <a href='https://github.com/nicklascschmidt' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
                <p>LinkedIn: <a href='https://www.linkedin.com/in/nicklascschmidt/' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
                <p>Phone number: <img src='https://i.imgur.com/fY5GrcF.jpg' alt='see resume for #' height='30px' style={{borderRadius:'10px'}}/></p>
              </CardComponent>
              </ColComponent>
            <ColComponent md='12' lg='8'>
              <CardComponent header='Send an Email'>
                <ContactForm />
              </CardComponent>
            </ColComponent>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
