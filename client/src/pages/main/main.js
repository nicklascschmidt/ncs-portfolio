import React from "react";
import styled from 'styled-components';
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import { Container, Row } from 'reactstrap';
import ColComponent from '../../components/grid/ColComponent';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { desktopLinksArray, mobileLinksArray } from './featuredProjectLinks';
import { FaDesktop, FaMobileAlt } from "react-icons/fa";

// TODO: finish carousel and update pix

const ImageContainer = styled.div`
  border: 2px solid #6D4C3D;
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
`;
const ImgCustom = styled.img`
  margin: -20px auto;
  width: 100%;
  height: auto;
`;
const HrCustom = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #74AA6F;
`;

class Main extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        isCarouselDesktop: true,
      };
  }

  switchToDesktop = () => {
    this.setState({ isCarouselDesktop: true });
  }
  switchToMobile = () => {
    this.setState({ isCarouselDesktop: false });
  }

  render() {
    return (
      <div>
        <JumbotronComponent title='Nicklas Chen Schmidt' subtitle='Full-Stack Developer'>
          <ImageContainer>
            <ImgCustom src='https://i.imgur.com/rSkhIRj.jpg' alt='Profile Picture'></ImgCustom>
          </ImageContainer>
        </JumbotronComponent>
        <Container>
          <Row>
            <ColComponent md='12' lg='7'>
              <CardComponent header='About'>
                <p>I’m a full-stack developer seeking opportunities in the Bay Area. I’m passionate about building and improving web applications, as well as solving puzzles, learning new concepts, and translating ideas into real world applications.</p>
                <HrCustom />
                <p>Recently, I completed a rigorous 6-month full-stack web development bootcamp at the <a href='https://bootcamp.uclaextension.edu/coding/' target='_blank' rel="noopener noreferrer">UCLA Ext. Coding Bootcamp</a> (in-person classes). The course dove into HTML, CSS, JavaScript, jQuery, Node, React, Express, MySQL, MongoDB, Bootstrap, Responsive Design, Git, Heroku, AJAX, JSON, and APIs. Students completed projects both individually and in groups, giving us comprehensive experience with pair programming and cooperative git workflows.</p>
                <p>Prior to pursuing a career in web development, I studied Business at Northeastern University, completing three full-time 6-month <a href='https://www.northeastern.edu/coop/about/' target='_blank' rel="noopener noreferrer">co-ops</a> in digital marketing. After graduating in 2017, I continued my path in digital marketing at startup <a href='http://www.workreduce.com/' target='_blank' rel="noopener noreferrer">WorkReduce</a>. Working in digital marketing, I gained exposure to HTML and JavaScript, and dabbled around on Codecademy before deciding to jump headfirst into web dev at the UCLA Coding Bootcamp.</p>
                <p>At heart, I’m a builder and a problem solver. Bootcamp provided me with a solid foundation to start building, keep problem-solving, and constantly continue learning. For me, the journey is just beginning!</p>
              </CardComponent>
            </ColComponent>
            <ColComponent md='12' lg='5'>
              <CardComponent header='Quick Info' align='left'>
                <p>Email: <a href='mailto:nicklas.c.schmidt@gmail.com'>nicklas.c.schmidt@gmail.com</a></p>
                <p>Github: <a href='https://github.com/nicklascschmidt' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
                <p>LinkedIn: <a href='https://www.linkedin.com/in/nicklascschmidt/' target='_blank' rel="noopener noreferrer">nicklascschmidt</a></p>
                <p>Phone number: <img src='https://i.imgur.com/fY5GrcF.jpg' alt='see resume for #' height='30px' style={{borderRadius:'10px'}}/></p>
              </CardComponent>
              <CardComponent header='Featured Project' align='center'>
                <FaDesktop size='2em' onClick={this.switchToDesktop}/>
                <FaMobileAlt size='2em' onClick={this.switchToMobile}/>
                <CarouselComponent array={this.state.isCarouselDesktop ? desktopLinksArray : mobileLinksArray} />
              </CardComponent>
            </ColComponent>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
