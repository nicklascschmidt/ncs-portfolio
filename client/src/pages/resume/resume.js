import React from "react";
import styled from 'styled-components';
import IconATagComponent from '../../components/icon/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';

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
`;

const CardHeaderCustom = styled(CardHeader)`
  background-color: #9E7D62 !important;
  color: white;
`;

const CardBodyCustom = styled(CardBody)`
  color: #3F2113;
`;

const ImgCustom = styled.img`
  width: 100%;
  height: 100%;
`;


class Resume extends React.Component {

  render() {
    return (
      <div>
        <JumbotronCustom>
          <h1>Resume</h1>
          <hr style={{width: '400px', border: '1px solid #74AA6F'}}></hr>
          <IconATagComponent hrefLink='https://github.com/nicklascschmidt'>
            <FontAwesomeIcon icon={Brands.faGithub} size='2x' />
          </IconATagComponent>
          <IconATagComponent hrefLink='https://www.linkedin.com/in/nicklascschmidt/'>
            <FontAwesomeIcon icon={Brands.faLinkedin} size='2x' />
          </IconATagComponent>
        </JumbotronCustom>
        <Container>
          <CardCustom>
            <CardHeaderCustom>
              <h4>Hyperlinks</h4>
            </CardHeaderCustom>
              <CardBodyCustom>
                <p><strong>Google Drive Resume: </strong>
                  <IconATagComponent hrefLink='https://drive.google.com/file/d/1kmNdtWVtudgL0ihbTeAtNXo_0BvO36H3/view?usp=sharing' margin={0}>
                    <FontAwesomeIcon icon={Brands.faGoogleDrive} size='lg' />
                  </IconATagComponent>
                </p>
                <p>Portfolio: <a href='http://www.nicklaschenschmidt.com/'>nicklaschenschmidt.com</a></p>
                <p>GitHub: <a href='https://github.com/nicklascschmidt'>nicklascschmidt</a></p>
                <p>LinkedIn: <a href='https://www.linkedin.com/in/nicklascschmidt/'>nicklas-chen-schmidt</a></p>
                <p>ThreadAuction: <a href='https://threadauction.herokuapp.com/'>Application</a> | <a href='https://github.com/nicklascschmidt/threadauction'>GitHub</a></p>
              </CardBodyCustom>
              <hr></hr>
              <CardBody>
                <ImgCustom src='https://i.imgur.com/44Q2ior.jpg' alt='Resume'></ImgCustom>
              </CardBody>
          </CardCustom>
        </Container>
      </div>
    );
  }
}

export default Resume;
