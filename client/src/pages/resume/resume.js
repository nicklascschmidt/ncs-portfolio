import React from "react";
import styled from 'styled-components';
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import { Container, Card, CardBody } from 'reactstrap';
import { FaFileAlt } from "react-icons/fa";
import IconATagComponent from '../../components/icon/icon';
import { resumeDropboxLink, resumeImgurLink } from './resumeSource';

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
          <Card style={{margin:'0 0 20px 0'}}>
            <CardBody style={{position:'relative'}}>
              <div style={{position:'absolute', right:'10px', top:'10px'}}>
                <IconATagComponent hrefLink={resumeDropboxLink}>
                  <FaFileAlt size='3em'/>
                </IconATagComponent>
              </div>
              <ImgCustom src={resumeImgurLink} alt='Resume' />
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Resume;
