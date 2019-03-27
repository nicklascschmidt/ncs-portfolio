import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import { Container, Row, Col, Button } from 'reactstrap';
import ProfileImageComponent from '../../components/img/profile-image';
import DemoProjectComponent from '../../components/demoProject/DemoProject';
import HeaderComponent from '../../components/header/Header';
import FeaturedProjectsComponent from '../../components/featuredProject/FeaturedProjects';
import SectionFooterComponent from '../../components/sectionFooter/SectionFooter';
import { LinkContainer } from 'react-router-bootstrap';
import AboutMeComponent from '../../components/aboutMe/AboutMe';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';


// TODO: update pix for projects

class Main extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        
      };
  }

  render() {
    return (
      <div>
        <JumbotronComponent title='Nicklas Chen Schmidt' subtitle='Full-Stack Developer'>
          <ProfileImageComponent src='https://i.imgur.com/rSkhIRj.jpg' alt='Profile Picture' />
        </JumbotronComponent>
        <Container>
          <Row>
            <Col lg='8' className='mb-3'>
              <CardComponent header='About'>
                <AboutMeComponent />
              </CardComponent>
            </Col>
            <Col lg='4' className='mb-3'>
              <CardComponent header='Contact Info' classNameProp='card-height-fix'>
                <ContactInfo />
              </CardComponent>
            </Col>
          </Row>
        </Container>
        <HeaderComponent title='Featured Projects' id='main-projects'/>
        <Container>
          <DemoProjectComponent />
          <FeaturedProjectsComponent />
          <SectionFooterComponent>
            <LinkContainer to='/projects'>
              <Button>Go to All Projects</Button>
            </LinkContainer>
          </SectionFooterComponent>
        </Container>
        <HeaderComponent title='Contact' id='contact'/>
        <Container>
          <CardComponent header='Send an Email'>
            <ContactForm />
          </CardComponent>
        </Container>
      </div>
    );
  }
}

export default Main;
