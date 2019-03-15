import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import { Container, Card, CardBody } from 'reactstrap';
import { FaFileAlt } from "react-icons/fa";
import IconATagComponent from '../../components/icon/icon';
import { resumeDropboxLink, resumeImgurLink } from './resumeSource';
import './resume.scss';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Resume' />
        <Container>
          <Card className='mb-3'>
            <CardBody className='resume-card'>
              {/* inline style only */}
              <span style={{position:'absolute', right:'1rem', top:'1rem'}}> 
                <IconATagComponent hrefLink={resumeDropboxLink}>
                  <FaFileAlt size='3em'/>
                </IconATagComponent>
              </span>
              <img src={resumeImgurLink} alt='Resume' className='resume-img' />
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Resume;
