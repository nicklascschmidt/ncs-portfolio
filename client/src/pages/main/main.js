import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import { Container, Row, Col, Button } from 'reactstrap';
import ProfileImageComponent from '../../components/img/profile-image';
import DemoProjectComponent from '../../components/demoProject/DemoProject';
import HeaderComponent from '../../components/header/Header';
import FeaturedProjectsComponent from '../../components/featuredProject/FeaturedProjects';
import ContactComponent from '../../components/contact/Contact';
import SectionFooterComponent from '../../components/sectionFooter/SectionFooter';
import { LinkContainer } from 'react-router-bootstrap';
import AboutMeComponent from '../../components/aboutMe/AboutMe';


// TODO: update pix for projects
// TODO: update demo project and make vid
// TODO: update about me content to something better (from c letter?)

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
            <Col lg='7' className='mb-2'>
              <CardComponent header='About' classNameProp='mb-2'>
                <AboutMeComponent />
              </CardComponent>
            </Col>
            <Col lg='5' className='mb-2'>
              <CardComponent header='Demo: Movie Master' align='center' classNameProp='mb-2'>
                <DemoProjectComponent />
              </CardComponent>
            </Col>
          </Row>
        </Container>
        <HeaderComponent title='Featured Projects' id='main-projects'/>
        <Container>
          <FeaturedProjectsComponent />
          <SectionFooterComponent>
            <LinkContainer to='/projects'>
              <Button>Go to All Projects</Button>
            </LinkContainer>
          </SectionFooterComponent>
        </Container>
        <HeaderComponent title='Contact' id='contact'/>
        <Container>
          <ContactComponent />
        </Container>
      </div>
    );
  }
}

export default Main;
