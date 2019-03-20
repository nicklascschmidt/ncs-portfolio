import React from "react";
import IconATagComponent from '../icon/icon';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { resumeDropboxLink } from '../../pages/resume/resumeSource';
import './jumbotron.css';

class JumbotronComponent extends React.Component {
  render() {
    return (
      <div className='jumbotron-style p-3 mb-3'>
        {this.props.children}
        <h1>{this.props.title}</h1>
        {this.props.subtitle ? <h3>{this.props.subtitle}</h3> : null }
        <hr className='hr-jumbotron' />
        <IconATagComponent hrefLink='https://github.com/nicklascschmidt' classNameProp='mx-2'>
          <FaGithub size='2em'/>
        </IconATagComponent>
        <IconATagComponent hrefLink='https://www.linkedin.com/in/nicklascschmidt/' classNameProp='mx-2'>
          <FaLinkedin size='2em'/>
        </IconATagComponent>
        <IconATagComponent hrefLink={resumeDropboxLink} classNameProp='mx-2'>
          <FaFileAlt size='2em'/>
        </IconATagComponent>
      </div>
    );
  }
}

export default JumbotronComponent;
