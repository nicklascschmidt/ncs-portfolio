import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/card/card';
import ContactForm from '../../components/contactForm/ContactForm';
import { Container } from 'reactstrap';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <JumbotronComponent title='Contact'/>
        <Container>
          <CardComponent header='Contact Email'>
            <ContactForm />
          </CardComponent>
        </Container>
      </div>
    );
  }
}

export default Contact;
