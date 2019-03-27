import React from "react";
import CarouselComponent from '../carousel/CarouselComponent';
import { Card, CardText, CardBody, CardLink, CardHeader, CardFooter } from 'reactstrap';

class CardProjectComponent extends React.Component {
  render() {
    let technologies = this.props.techUsed && <CardText style={{fontSize:'.9rem'}}><strong>Technologies:</strong> {this.props.techUsed}.</CardText>;
    return (
      <Card className='mb-3 card-height-fix'>
        <CardHeader className='card-header-style'>
          <h5><a href={this.props.projectLink} className='project-link' target='_blank' rel="noopener noreferrer">{this.props.title}</a></h5>
        </CardHeader>
        <CarouselComponent array={this.props.array}/>
        <CardBody>
          <CardText>{this.props.projectDescription}</CardText>
          {technologies}
        </CardBody>
          <CardFooter style={{textAlign:'right'}}>
            <CardLink href={this.props.projectLink} target='_blank' rel="noopener noreferrer">Live Site</CardLink>
            <CardLink href={this.props.githubLink} target='_blank' rel="noopener noreferrer">GitHub</CardLink>
          </CardFooter>
      </Card>
    )
  }
}

export default CardProjectComponent;

