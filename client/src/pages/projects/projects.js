import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardProjectComponent from '../../components/cards/CardProject';
import { Container, Row, Col } from 'reactstrap';
import { projectArray } from './projectArray';

class Projects extends React.Component {
  
  showCards = () => {
    let displayProjectArray = [];
    for (let i=0; i < projectArray.length; i+=2) {
      displayProjectArray.push(
        <Row>
          <Col lg='6'>
            <CardProjectComponent
              classNameProp='mb-2'
              title={projectArray[i].title}
              // subTitle={projectArray[i].subTitle}
              array={projectArray[i].imgSrcArray}
              projectDescription={projectArray[i].projectDescription}
              projectLink={projectArray[i].projectLink}
              githubLink={projectArray[i].githubLink} />
          </Col>
          {projectArray[i+1] ? 
          <Col lg='6'>
            <CardProjectComponent
              classNameProp='mb-2'
              title={projectArray[i+1].title}
              // subTitle={projectArray[i+1].subTitle}
              array={projectArray[i+1].imgSrcArray}
              projectDescription={projectArray[i+1].projectDescription}
              projectLink={projectArray[i+1].projectLink}
              githubLink={projectArray[i+1].githubLink} />
          </Col> : null}
        </Row>
      )
    }
    return displayProjectArray
  }

  render() {
    return (
      <div>
        <JumbotronComponent title='Projects' />
        <Container>
          {this.showCards()}
        </Container>
      </div>
    )
  }
}

export default Projects;
