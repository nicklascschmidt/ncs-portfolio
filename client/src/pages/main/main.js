import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import { Container, Row } from 'reactstrap';
import ColComponent from '../../components/grid/ColComponent';
import ProfileImageComponent from '../../components/img/profile-image';
import FeaturedProjectComponent from '../../components/featuredProject/FeaturedProject';

// TODO: finish carousel and update pix

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
            <ColComponent md='12' lg='7'>
              <CardComponent header='About' classNameProp='mb-2'>
                <p>I’m a full-stack developer seeking opportunities in the Bay Area. I’m passionate about building and improving web applications, as well as solving puzzles, learning new concepts, and translating ideas into real world applications.</p>
                <hr />
                <p>Recently, I completed a rigorous 6-month full-stack web development bootcamp at the <a href='https://bootcamp.uclaextension.edu/coding/' target='_blank' rel="noopener noreferrer">UCLA Ext. Coding Bootcamp</a> (in-person classes). The course dove into HTML, CSS, JavaScript, jQuery, Node, React, Express, MySQL, MongoDB, Bootstrap, Responsive Design, Git, Heroku, AJAX, JSON, and APIs. Students completed projects both individually and in groups, giving us comprehensive experience with pair programming and cooperative git workflows.</p>
                <p>Prior to pursuing a career in web development, I studied Business at Northeastern University, completing three full-time 6-month <a href='https://www.northeastern.edu/coop/about/' target='_blank' rel="noopener noreferrer">co-ops</a> in digital marketing. After graduating in 2017, I continued my path in digital marketing at startup <a href='http://www.workreduce.com/' target='_blank' rel="noopener noreferrer">WorkReduce</a>. Working in digital marketing, I gained exposure to HTML and JavaScript, and dabbled around on Codecademy before deciding to jump headfirst into web dev at the UCLA Coding Bootcamp.</p>
                <p>At heart, I’m a builder and a problem solver. Bootcamp provided me with a solid foundation to start building, keep problem-solving, and constantly continue learning. For me, the journey is just beginning!</p>
              </CardComponent>
            </ColComponent>
            <ColComponent md='12' lg='5'>
              <CardComponent header='Quick Info' align='left' classNameProp='mb-2'>
                <p>Email: <a href='mailto:nicklas.c.schmidt@gmail.com'>nicklas.c.schmidt@gmail.com</a></p>
                <p>Phone number: <img src='https://i.imgur.com/fY5GrcF.jpg' alt='see resume for #' height='30px' style={{borderRadius:'10px'}}/></p>
              </CardComponent>
              <CardComponent header='Featured Project' headerAlign='center' align='center' classNameProp='mb-2'>
                <FeaturedProjectComponent />
              </CardComponent>
            </ColComponent>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
