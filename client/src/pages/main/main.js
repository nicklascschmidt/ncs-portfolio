import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from '@fortawesome/free-brands-svg-icons';


import {
  Container,
  Jumbotron,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

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

const JumbotronCustom = styled(Jumbotron)`
  background-color: #DCC9B6 !important;
  color: #3F2113;
  text-align: center;
`;

const IconFormat = styled.div`
  display: inline-block;
  margin: 10px;
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

class Main extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

      };
  }

  // componentDidMount = () => {
  //   this.setState({

  //   });
  // };

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };


  render() {
    return (
      <div>
        <JumbotronCustom>
          <ImageContainer>
            <ImgCustom src='https://i.imgur.com/rSkhIRj.jpg' alt='Profile Picture'></ImgCustom>
          </ImageContainer>
          <h1>Nicklas Chen Schmidt</h1>
          <h3>Full Stack Web Developer</h3>
          <IconFormat>
            <a href='https://github.com/nicklascschmidt' target='_blank'>
              <FontAwesomeIcon icon={Brands.faGithub} size='2x' />
            </a>
          </IconFormat>
          <IconFormat>
            <a href='https://www.linkedin.com/in/nicklas-chen-schmidt-7158438a/' target='_blank'>
              <FontAwesomeIcon icon={Brands.faLinkedin} size='2x' />
            </a>
          </IconFormat>
        </JumbotronCustom>
        <Container>
          <CardCustom>
            <CardHeaderCustom>
              <h5><strong>About</strong></h5>
            </CardHeaderCustom>
            <CardBodyCustom>
              <p>
              My name is Nicklas Chen Schmidt, and I’m a full stack developer seeking opportunities in the Bay Area. I’m passionate about building and improving web applications, as well as solving puzzles, learning new concepts, and translating ideas into real world applications.
              </p>
            </CardBodyCustom>
          </CardCustom>
          <CardCustom>
            <CardHeaderCustom>
              <h5><strong>My Story</strong></h5>
            </CardHeaderCustom>
            <CardBodyCustom>
              <p>
              Recently, I completed a rigorous 6-month full stack web development bootcamp at the <a href='https://bootcamp.uclaextension.edu/coding/' target='_blank' rel="noopener">UCLA Coding Bootcamp</a> (in-person classes). The program dives into HTML, CSS, JavaScript, jQuery, Node.js, React.js, Express, MySQL, MongoDB, Bootstrap, Responsive Design, Git, Heroku, AJAX, JSON, and APIs. Projects are completed both individually and in groups, giving students comprehensive experience with pair programming and cooperative git workflows.
              </p>
              <p>
              Prior to pursuing a career in web development, I studied Business at Northeastern University, completing three 6-month co-ops in digital marketing. After graduating in 2017, I continued pursuing a career in digital marketing at startup <a href='http://www.workreduce.com/' target='_blank' rel="noopener">WorkReduce</a>. Working in digital marketing, I gained exposure to HTML and JavaScript, and dabbled around on Codecademy (JS) before deciding to jump head first into web dev at the UCLA Coding Bootcamp.
              </p>
              <p>
              At heart, I’m a creator and a problem solver. The Bootcamp provided me with a solid foundation to start building, keep problem-solving, and constantly continue learning. For me, the journey is just beginning!
              </p>
            </CardBodyCustom>
          </CardCustom>
        </Container>
      </div>
    );
  }
}

export default Main;
