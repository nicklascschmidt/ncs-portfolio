import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardComponent from '../../components/cards/Card';
import CardProjectComponent from '../../components/cards/CardProject';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const RowCustom = styled(Row)`
  margin: 20px 0;
`;

class Projects extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Projects' />
        <Container>
          <RowCustom>
            <Col xs="12" sm='12' md='12' lg='4'>
              <CardProjectComponent
                title='ThreadAuction' subTitle='Full stack React app with a Node backend and MySQL DB.'
                imgSrc='https://i.imgur.com/Eme9QgV.png'
                projectDescription='Ecommerce site with an auction system and user authentication. Products are displayed onsite with product details and auction information. Auctions expire one week after posting.'
                projectLink='https://threadauction.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/threadauction'>
              </CardProjectComponent>
            </Col>
            <Col xs="12" sm='12' md='12' lg='4'>
              <CardProjectComponent
                title='ThreadAuction' subTitle='Full stack React app with a Node backend and MySQL DB.'
                imgSrc='https://i.imgur.com/Eme9QgV.png'
                projectDescription='Ecommerce site with an auction system and user authentication. Products are displayed onsite with product details and auction information. Auctions expire one week after posting.'
                projectLink='https://threadauction.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/threadauction'>
              </CardProjectComponent>
            </Col>
            <Col xs="12" sm='12' md='12' lg='4'>
              <CardProjectComponent
                title='ThreadAuction' subTitle='Full stack React app with a Node backend and MySQL DB.'
                imgSrc='https://i.imgur.com/Eme9QgV.png'
                projectDescription='Ecommerce site with an auction system and user authentication. Products are displayed onsite with product details and auction information. Auctions expire one week after posting.'
                projectLink='https://threadauction.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/threadauction'>
              </CardProjectComponent>
            </Col>
          </RowCustom>
        </Container>
      </div>
    )
  }
}

export default Projects;
