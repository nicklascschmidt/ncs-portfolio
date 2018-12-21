import React from "react";
import styled from 'styled-components';
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import { Container } from 'reactstrap';

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

class Main extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

      };
  }

  render() {
    return (
      <div>
        <JumbotronComponent title='Nicklas Chen Schmidt' subtitle='Full Stack Developer'>
          <ImageContainer>
            <ImgCustom src='https://i.imgur.com/rSkhIRj.jpg' alt='Profile Picture'></ImgCustom>
          </ImageContainer>
        </JumbotronComponent>
        <Container>
          <CardComponent header='About'>
              <p>
                My name is Nicklas Chen Schmidt, and I’m a full stack developer seeking opportunities in the Bay Area. I’m passionate about building and improving web applications, as well as solving puzzles, learning new concepts, and translating ideas into real world applications.
              </p>
          </CardComponent>
          <CardComponent header='My Story'>
              <p>
                Recently, I completed a rigorous 6-month full stack web development bootcamp at the <a href='https://bootcamp.uclaextension.edu/coding/' target='_blank' rel="noopener noreferrer">UCLA Coding Bootcamp</a> (in-person classes). The program dives into HTML, CSS, JavaScript, jQuery, Node.js, React.js, Express, MySQL, MongoDB, Bootstrap, Responsive Design, Git, Heroku, AJAX, JSON, and APIs. Projects are completed both individually and in groups, giving students comprehensive experience with pair programming and cooperative git workflows.
              </p>
              <p>
                Prior to pursuing a career in web development, I studied Business at Northeastern University, completing three 6-month co-ops in digital marketing. After graduating in 2017, I continued pursuing a career in digital marketing at startup <a href='http://www.workreduce.com/' target='_blank' rel="noopener noreferrer">WorkReduce</a>. Working in digital marketing, I gained exposure to HTML and JavaScript, and dabbled around on Codecademy (JS) before deciding to jump head first into web dev at the UCLA Coding Bootcamp.
              </p>
              <p>
                At heart, I’m a creator and a problem solver. The Bootcamp provided me with a solid foundation to start building, keep problem-solving, and constantly continue learning. For me, the journey is just beginning!
              </p>
          </CardComponent>
        </Container>
      </div>
    );
  }
}

export default Main;
