import React from "react";
import styled from 'styled-components';
import IconATagComponent from '../icon/icon';
import { Jumbotron } from 'reactstrap';
import { FaGithub,FaLinkedin,FaFileAlt } from "react-icons/fa";
import { resumeDropboxLink } from '../../pages/resume/resumeSource';

const JumbotronCustom = styled(Jumbotron)`
  background-color: #DCC9B6 !important;
  color: #3F2113;
  text-align: center;
`;

class JumbotronComponent extends React.Component {
  render() {
    return (
      <div>
        <JumbotronCustom>
          {this.props.children}
          <h1>{this.props.title}</h1>
          {this.props.subtitle ? <h3>{this.props.subtitle}</h3> : null }
          <hr style={{width: '400px', border: '1px solid #74AA6F'}} />
          <IconATagComponent hrefLink='https://github.com/nicklascschmidt'>
            <FaGithub size='2em'/>
          </IconATagComponent>
          <IconATagComponent hrefLink='https://www.linkedin.com/in/nicklascschmidt/'>
            <FaLinkedin size='2em'/>
          </IconATagComponent>
          <IconATagComponent hrefLink={resumeDropboxLink}>
            <FaFileAlt size='2em'/>
          </IconATagComponent>
        </JumbotronCustom>
        </div>
    );
  }
}

export default JumbotronComponent;
