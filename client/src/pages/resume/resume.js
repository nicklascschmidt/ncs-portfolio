import React from "react";
import styled from 'styled-components';
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import { Container, Card, CardBody } from 'reactstrap';
import { FaFileAlt } from "react-icons/fa";
import IconATagComponent from '../../components/icon/icon';

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
                <IconATagComponent hrefLink='https://www.dropbox.com/s/c939lo0aeov3exs/NCS_Resume_Feb%202019.docx?dl=0'>
                  <FaFileAlt size='3em'/>
                </IconATagComponent>
              </div>
              <ImgCustom src='https://i.imgur.com/B8o4zgv.jpg' alt='Resume' />
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Resume;
