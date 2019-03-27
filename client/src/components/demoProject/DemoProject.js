import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardText, CardLink } from 'reactstrap';
import projectArray from '../../pages/projects/projectArray';

const imgBorder = {
  backgroundColor: `var(--jumbotron-color)`,
  boxShadow: `0px 1px 5px 1px var(--jumbotron-color)`,
  borderRadius: '3px'
}

class DemoProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demoMovie: projectArray[0]
    };
  }

  render() {
    return (
      <Card className='mb-2'>
        <CardHeader className='card-header-style'>
          <h5><a href={this.state.demoMovie.projectLink} className='project-link' target='_blank' rel="noopener noreferrer">{this.state.demoMovie.title}</a></h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg='4' className='mb-2'>
              <CardText>{this.state.demoMovie.projectDescription}</CardText>
              <CardText style={{fontSize:'.9rem'}}><strong>Technologies:</strong> {this.state.demoMovie.techUsed.join(', ')}.</CardText>
              <CardLink href={this.state.demoMovie.projectLink} target='_blank' rel="noopener noreferrer">Live Site</CardLink>
              <CardLink href={this.state.demoMovie.githubLink} target='_blank' rel="noopener noreferrer">GitHub</CardLink>
            </Col>
            <Col md='9' lg='6' className='mb-2'>
              <img width='100%' style={imgBorder} src={this.state.demoMovie.videoSrcDesktop} alt='demo desktop video' />
            </Col>
            <Col xs='8' sm='8' md='3' lg='2' className='mb-2 mx-auto'>
              <img width='100%' style={imgBorder} src={this.state.demoMovie.videoSrcMobile} alt='demo mobile video' />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default DemoProjectComponent;




{/* <Row style={{height:'250px'}}>
  <Col xs='12' lg='4' style={{maxHeight:'100%'}}>
    <CardText>{this.state.demoMovie.projectDescription}</CardText>
    <CardText style={{fontSize:'.9rem'}}><strong>Technologies:</strong> {this.state.demoMovie.techUsed.join(', ')}.</CardText>
    <CardLink href={this.state.demoMovie.projectLink} target='_blank' rel="noopener noreferrer">Live Site</CardLink>
    <CardLink href={this.state.demoMovie.githubLink} target='_blank' rel="noopener noreferrer">GitHub</CardLink>
  </Col>
  <Col xs='12' sm='8' md='3' lg='2' style={{maxHeight:'100%', textAlign:'center'}}>
    <img style={{height:'100%'}} src={this.state.demoMovie.videoSrcMobile} alt='demo mobile video' />
  </Col>
  <Col xs='12' md='9' lg='6' style={{maxHeight:'100%', textAlign:'center'}}>
    <img style={{height:'100%'}} src={this.state.demoMovie.videoSrcDesktop} alt='demo desktop video' />
  </Col>
</Row> */}