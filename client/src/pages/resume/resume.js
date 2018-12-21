import React from "react";
import styled from 'styled-components';
import IconATagComponent from '../../components/icon/icon';
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import { Container } from 'reactstrap';

const ImgCustom = styled.img`
  width: 100%;
  height: 100%;
`;

class Resume extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Resume' />
        <Container>
          <CardComponent header='Hyperlinks'>
            <p><strong>Google Drive Resume: </strong>
              <IconATagComponent hrefLink='https://drive.google.com/file/d/1kmNdtWVtudgL0ihbTeAtNXo_0BvO36H3/view?usp=sharing' margin={0}>
                <FontAwesomeIcon icon={Brands.faGoogleDrive} size='lg' />
              </IconATagComponent>
            </p>
            <p>Portfolio: <a href='http://www.nicklaschenschmidt.com/'>nicklaschenschmidt.com</a></p>
            <p>GitHub: <a href='https://github.com/nicklascschmidt'>nicklascschmidt</a></p>
            <p>LinkedIn: <a href='https://www.linkedin.com/in/nicklascschmidt/'>nicklas-chen-schmidt</a></p>
            <p>ThreadAuction: <a href='https://threadauction.herokuapp.com/'>Application</a> | <a href='https://github.com/nicklascschmidt/threadauction'>GitHub</a></p>
            <hr style={{width: '99%', border: '1px solid #74AA6F'}}></hr>
            <ImgCustom src='https://i.imgur.com/44Q2ior.jpg' alt='Resume'></ImgCustom>
          </CardComponent>
        </Container>
      </div>
    );
  }
}

export default Resume;
