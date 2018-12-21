import React from "react";
import styled from 'styled-components';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardHeader
} from 'reactstrap';

const CardCustom = styled(Card)`
  display: inline-block;
  margin: ${props => props.margin || '0'};
  /* width: ${props => props.width || '300px'} */
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
          <CardTitle>{this.props.title}</CardTitle>
          <hr style={{width: '90%', border: '1px solid #74AA6F'}} />
          <CardSubtitle>{this.props.subTitle}</CardSubtitle>
        </CardHeaderCustom>
        <CardImg width="100%" src={this.props.imgSrc} alt="Project Image" />
        <CardBodyCustom>
          <CardText>{this.props.projectDescription}</CardText>
          <CardLink href={this.props.projectLink} target='_blank'>Card Link</CardLink>
          <CardLink href={this.props.githubLink} target='_blank'>Another Link</CardLink>
        </CardBodyCustom>
      </CardCustom>
    )
  }
}

export default CardProjectComponent;

