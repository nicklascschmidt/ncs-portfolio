import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CardProjectComponent from '../cards/CardProject';
import projectArray from '../../pages/projects/projectArray';

class FeaturedProjectsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: projectArray.slice(1,4)
    };
  }

  render() {
    return (
      <Row className='mb-2'>
        {this.state.array.map( (item, i) => 
          <Col lg='4' className='mb-2'>
            <CardProjectComponent
              key={`project${i}`}
              title={item.title}
              array={item.imgSrcArray}
              projectDescription={item.projectDescription}
              projectLink={item.projectLink}
              githubLink={item.githubLink}
              techUsed={item.techUsed && item.techUsed.join(', ')}
            />
          </Col>
        )}
      </Row>
    )
  }
}

export default FeaturedProjectsComponent;
