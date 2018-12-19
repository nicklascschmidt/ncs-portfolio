import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/card/card';
import { Container } from 'reactstrap';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Projects' />
        <Container>
          <CardComponent header='Featured Projects'>
            <p>in progress...</p>
          </CardComponent>
        </Container>
      </div>
    )
  }
}

export default Projects;