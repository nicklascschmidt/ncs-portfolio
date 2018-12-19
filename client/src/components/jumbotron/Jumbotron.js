import React from "react";
import styled from 'styled-components';
import IconATagComponent from '../icon/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';

import { Jumbotron } from 'reactstrap';

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
          <hr style={{width: '400px', border: '1px solid #74AA6F'}}></hr>
          <IconATagComponent hrefLink='https://github.com/nicklascschmidt'>
            <FontAwesomeIcon icon={Brands.faGithub} size='2x' />
          </IconATagComponent>
          <IconATagComponent hrefLink='https://www.linkedin.com/in/nicklascschmidt/'>
            <FontAwesomeIcon icon={Brands.faLinkedin} size='2x' />
          </IconATagComponent>
        </JumbotronCustom>
        </div>
    );
  }
}

export default JumbotronComponent;
