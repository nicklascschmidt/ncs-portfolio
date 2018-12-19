import React from "react";
import styled from 'styled-components';
import IconATagComponent from '../../components/icon/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import PDFJSBackend from '../../backends/pdfjs';

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

const CardPdfCustom = styled(Card)`
  margin: 32px;
  height: 1140px;
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
              <h4>Hyperlinks are accessible here</h4>
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
          </CardCustom>
          <CardPdfCustom>
            <PDFViewer
              backend={PDFJSBackend}
              src='/resume-12.18.18.pdf'
            />
          </CardPdfCustom>
        </Container>
      </div>
    );
  }
}

export default Resume;
