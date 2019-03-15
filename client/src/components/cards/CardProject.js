import React from "react";
import CarouselComponent from '../carousel/CarouselComponent';

import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardHeader
} from 'reactstrap';

class CardProjectComponent extends React.Component {
  render() {
    return (
      <Card className={this.props.classNameProp}>
        <CardHeader className='card-header-style'>
          <h4><a href={this.props.projectLink} className='project-link' target='_blank' rel="noopener noreferrer">{this.props.title}</a></h4>
        </CardHeader>
        <CarouselComponent array={this.props.array}/>
        <CardBody>
          <CardText>{this.props.projectDescription}</CardText>
          <CardLink href={this.props.projectLink} target='_blank' rel="noopener noreferrer">Live Site</CardLink>
          <CardLink href={this.props.githubLink} target='_blank' rel="noopener noreferrer">GitHub</CardLink>
        </CardBody>
      </Card>
    )
  }
}

export default CardProjectComponent;

