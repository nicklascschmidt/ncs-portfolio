import React from "react";
import styled from 'styled-components';
import IconATagComponent from '../icon/icon';
// import { Jumbotron } from 'reactstrap';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { resumeDropboxLink } from '../../pages/resume/resumeSource';

class JumbotronComponent extends React.Component {
  render() {
    return (
      <div className='jumbotron-style'>
        {this.props.children}
        <h1>{this.props.title}</h1>
        {this.props.subtitle ? <h3>{this.props.subtitle}</h3> : null }
        <hr className='hr-jumbotron' />
        <IconATagComponent hrefLink='https://github.com/nicklascschmidt'>
          <FaGithub size='2em'/>
        </IconATagComponent>
        <IconATagComponent hrefLink='https://www.linkedin.com/in/nicklascschmidt/'>
          <FaLinkedin size='2em'/>
        </IconATagComponent>
        <IconATagComponent hrefLink={resumeDropboxLink}>
          <FaFileAlt size='2em'/>
        </IconATagComponent>
      </div>
    );
  }
}

export default JumbotronComponent;
