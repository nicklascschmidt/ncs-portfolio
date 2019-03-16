import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CardProjectComponent from '../cards/CardProject';
import { projectArray } from '../../pages/projects/projectArray';

class FeaturedProjectsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: projectArray
    };
  }

  render() {
    return (
      <Row>
        {this.state.array.slice(1,4).map( (item, i) => 
          <Col lg='4'>
            <CardProjectComponent
              key={`project${i}`}
              classNameProp='mb-2'
              title={item.title}
              // subTitle={item.subTitle}
              array={item.imgSrcArray}
              projectDescription={item.projectDescription}
              projectLink={item.projectLink}
              githubLink={item.githubLink} />
          </Col>
        )}
      </Row>
    )
  }
}

export default FeaturedProjectsComponent;
