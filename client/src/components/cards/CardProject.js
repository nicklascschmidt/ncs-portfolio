import React from "react";
import styled from 'styled-components';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardHeader
} from 'reactstrap';

const CardCustom = styled(Card)`
  display: inline-block;
  margin: ${props => props.margin || '0'};
`;

const CardHeaderCustom = styled(CardHeader)`
  background-color: #9E7D62;
  color: white;
`;

const CardBodyCustom = styled(CardBody)`
  color: #3F2113;
`;

class CardProjectComponent extends React.Component {
  render() {
    return (
      <CardCustom>
        <CardHeaderCustom>
          <h4><a href={this.props.projectLink} style={{color:'white'}} target='_blank' rel="noopener noreferrer">{this.props.title}</a></h4>
          <hr style={{width: '100%', border: '1px solid #74AA6F'}} />
          <h5>{this.props.subTitle}</h5>
        </CardHeaderCustom>
        <CardImg width="100%" src={this.props.imgSrc} alt="Project Image" />
        <CardBodyCustom>
          <CardText>{this.props.projectDescription}</CardText>
          <CardLink href={this.props.projectLink} target='_blank' rel="noopener noreferrer">Live Site</CardLink>
          <CardLink href={this.props.githubLink} target='_blank' rel="noopener noreferrer">GitHub</CardLink>
        </CardBodyCustom>
      </CardCustom>
    )
  }
}

export default CardProjectComponent;

