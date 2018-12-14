import React from "react";
import styled from 'styled-components';
import IconATagComponent from '../../components/icon/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../../components/contactForm/ContactForm';

import {
  Container,
  Jumbotron,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const JumbotronCustom = styled(Jumbotron)`
  background-color: #DCC9B6 !important;
  color: #3F2113;
  text-align: center;
`;

const CardCustom = styled(Card)`
  margin: 32px;
`

const CardHeaderCustom = styled(CardHeader)`
  background-color: #9E7D62 !important;
  color: white;
`;

const CardBodyCustom = styled(CardBody)`
  color: #3F2113;
`;


class Contact extends React.Component {

  render() {
    return (
      <div>
        <JumbotronCustom>
          <h1>Contact</h1>
          <hr style={{width: '400px', border: '1px solid #74AA6F'}}></hr>
          <IconATagComponent hrefLink='https://github.com/nicklascschmidt'>
            <FontAwesomeIcon icon={Brands.faGithub} size='2x' />
          </IconATagComponent>
          <IconATagComponent hrefLink='https://www.linkedin.com/in/nicklas-chen-schmidt-7158438a/'>
            <FontAwesomeIcon icon={Brands.faLinkedin} size='2x' />
          </IconATagComponent>
        </JumbotronCustom>
        <Container>
          <CardCustom>
            <CardHeaderCustom>
              <h5><strong>Contact Email</strong></h5>
            </CardHeaderCustom>
            <CardBodyCustom>
              <ContactForm />
            </CardBodyCustom>
          </CardCustom>
        </Container>
      </div>
    );
  }
}

export default Contact;
