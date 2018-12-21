import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardProjectComponent from '../../components/cards/CardProject';
import { Container, Row } from 'reactstrap';
import ColComponent from '../../components/grid/ColProject';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Projects' />
        <Container>
          <Row>
            <ColComponent>
              <CardProjectComponent
                title='Portfolio Site (this one!)' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/lg5PHiJ.png'
                projectDescription='Descrip'
                projectLink='http://www.nicklaschenschmidt.com/' githubLink='https://github.com/nicklascschmidt/ncs-portfolio'>
              </CardProjectComponent>
            </ColComponent>
            <ColComponent>
              <CardProjectComponent
                title='ThreadAuction' subTitle='Full stack React app with a Node backend and MySQL DB.'
                imgSrc='https://i.imgur.com/Eme9QgV.png'
                projectDescription='Ecommerce site with an auction system and user authentication. Products are displayed onsite with product details and auction information. Auctions expire one week after posting.'
                projectLink='https://threadauction.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/threadauction'>
              </CardProjectComponent>
            </ColComponent>
          </Row>
          <Row>
            <ColComponent>
              <CardProjectComponent
                title='Mongo Scrape Reductress' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/5wEpBs3.png'
                projectDescription='Descrip'
                projectLink='https://mongo-scrape-app-reductress.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/mongo-scrape-app'>
              </CardProjectComponent>
            </ColComponent>
            <ColComponent>
              <CardProjectComponent
                title='Parks and Rec Clicky Game' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/SgCEARn.png'
                projectDescription='Descrip'
                projectLink='https://clicky-game-parks-and-rec.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/clicky-game-app'>
              </CardProjectComponent>
            </ColComponent>
          </Row>
          <Row>
            <ColComponent>
              <CardProjectComponent
                title='Gif-tastic' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/qU04swl.png'
                projectDescription='Descrip'
                projectLink='https://giftastic-app.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/GifTastic'>
              </CardProjectComponent>
            </ColComponent>
            <ColComponent>
              <CardProjectComponent
                title='Lord of the Rings Hangman' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/8Sk4qtX.jpg'
                projectDescription='Descrip'
                projectLink='https://hangman-lotr.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/Word-Guess-Game'>
              </CardProjectComponent>
            </ColComponent>
          </Row>
          <Row>
            <ColComponent>
              <CardProjectComponent
                title='Star Wars Trivia Game' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/NZsO0sH.png'
                projectDescription='Descrip'
                projectLink='https://star-wars-trivia.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/TriviaGame'>
              </CardProjectComponent>
            </ColComponent>
            <ColComponent>
              <CardProjectComponent
                title='Train Scheduler' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/ScZrp6E.png'
                projectDescription='Descrip'
                projectLink='https://train-scheduler-basic-app.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/Train-Scheduler'>
              </CardProjectComponent>
            </ColComponent>
          </Row>
          <Row>
            <ColComponent>
              <CardProjectComponent
                title='Dim Sum Collector' subTitle='Subtitle'
                imgSrc='https://i.imgur.com/CL6D0L1.png'
                projectDescription='Descrip'
                projectLink='https://dim-sum-collector-game.herokuapp.com/' githubLink='https://github.com/nicklascschmidt/dim-sum-collector'>
              </CardProjectComponent>
            </ColComponent>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Projects;
