import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardProjectComponent from '../../components/cards/CardProject';
import { Container, Row } from 'reactstrap';
import ColComponent from '../../components/grid/ColProject';
import { projectArray } from './projectArray';

class Projects extends React.Component {
  
  showCards = () => {
    let displayProjectArray = [];
    for (let i=0; i < projectArray.length; i+=2) {
      displayProjectArray.push(
        <Row>
          <ColComponent>
            <CardProjectComponent
              title={projectArray[i].title}
              subTitle={projectArray[i].subTitle}
              imgSrc={projectArray[i].imgSrc}
              projectDescription={projectArray[i].projectDescription}
              projectLink={projectArray[i].projectLink}
              githubLink={projectArray[i].githubLink} />
          </ColComponent>
          {projectArray[i+1] ? 
          <ColComponent>
            <CardProjectComponent
              title={projectArray[i+1].title}
              subTitle={projectArray[i+1].subTitle}
              imgSrc={projectArray[i+1].imgSrc}
              projectDescription={projectArray[i+1].projectDescription}
              projectLink={projectArray[i+1].projectLink}
              githubLink={projectArray[i+1].githubLink} />
          </ColComponent> : null}
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
