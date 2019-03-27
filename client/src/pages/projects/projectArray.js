const projectArray = [
  {
    title:'Movie Master',
    videoSrcDesktop:'https://media.giphy.com/media/cmzloTmkpcSfk4Aeuf/giphy.gif',
    videoSrcMobile:'https://media.giphy.com/media/1oDucHBAhiGZuPCzDn/giphy.gif',
    imgSrcArray:['https://i.imgur.com/oPuw1Aa.png','https://i.imgur.com/Q7tHguZ.png','https://i.imgur.com/5F3PQ2l.png'],
    projectDescription:'Movie watchlist tracker web app, where users log in then browse IMDB lists or search the OMDB API to create watchlists and track watched/unwatched movies.',
    projectLink:'https://movie-master-app.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/movie-master',
    techUsed:['JavaScript', 'jQuery', 'HTML', 'CSS', 'Node', 'Express', 'SQL', 'Sequelize', 'MVC', 'Axios', 'Cheerio', 'Ajax']
  },
  {
    title:'Guess the Album',
    imgSrcArray:['https://i.imgur.com/xUoggq3.png','https://i.imgur.com/fLz50mA.png','https://i.imgur.com/Rtnfat7.png','https://i.imgur.com/KDYBMHT.png'],
    projectDescription:'Music trivia game, where users guess the release date of popular albums, which are scraped from Rolling Stone.',
    projectLink:'https://guess-the-album.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/guess-the-album',
    techUsed:['React', 'JavaScript', 'Node', 'Express', 'HTML', 'CSS', 'Axios', 'Cheerio', 'react-router-dom', 'reactstrap', 'styled-components']
  },
  {
    title:'Portfolio Site (this one!)',
    subTitle:'Full stack React app with a Node backend, launched on AWS.',
    imgSrcArray:['https://i.imgur.com/QU3aC0S.png','https://i.imgur.com/CpIl68T.png','https://i.imgur.com/7pWlq8d.png','https://i.imgur.com/lFgcUsv.png','https://i.imgur.com/oNo3o8x.png'],
    projectDescription:'Mobile responsive portfolio site built with React and hosted on Amazon Web Services.',
    projectLink:'http://www.nicklaschenschmidt.com/',
    githubLink:'https://github.com/nicklascschmidt/ncs-portfolio',
    techUsed:['AWS (EBS)','React', 'JavaScript', 'Node', 'Express', 'HTML', 'CSS', 'react-router-dom', 'reactstrap']
  },
  {
    title:'ThreadAuction',
    subTitle:'Full stack React app with a Node backend and MySQL DB.',
    imgSrcArray:['https://i.imgur.com/TRfGL5p.png','https://i.imgur.com/VfyreG2.png','https://i.imgur.com/vL2uQKv.png','https://i.imgur.com/wxYbl3Z.png'],
    projectDescription:'Ecommerce auction site, where users login and browse auction listings, which expire one week after posting.',
    projectLink:'https://threadauction.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/threadauction',
    techUsed:['React', 'Redux', 'JavaScript', 'Node', 'Express', 'SQL', 'Sequelize', 'MVC', 'HTML', 'CSS', 'Axios', 'moment.js', 'react-router-dom', 'styled-components', 'sequelize-transforms']
  },
  {
    title:'Parks and Rec Clicky Game',
    subTitle:'React front-end application.',
    imgSrcArray:['https://i.imgur.com/SgCEARn.png'],
    projectDescription:'Game where users click on pictures to increment their score, as long as they don’t click the same character twice.',
    projectLink:'https://clicky-game-parks-and-rec.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/clicky-game-app'
  },
  {
    title:'Lord of the Rings Hangman',
    subTitle:'HTML/CSS/JS/jQuery application.',
    imgSrcArray:['https://i.imgur.com/8Sk4qtX.jpg'],
    projectDescription:'Users guess letters in the word by typing and win if they guess all the correct letters before getting five wrong.',
    projectLink:'https://hangman-lotr.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/Word-Guess-Game'
  },
  {
    title:'Mongo Scrape Reductress',
    subTitle:'Full stack HTML/CSS/JS/jQuery app with a Node backend and a MongoDB database.',
    imgSrcArray:['https://i.imgur.com/5wEpBs3.png'],
    projectDescription:'Users click a button to scrape Reductress.com popular articles page and can leave notes for each article. Notes are stored in the DB and are accessible from anywhere.',
    projectLink:'https://mongo-scrape-app-reductress.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/mongo-scrape-app'
  },
  {
    title:'Star Wars Trivia Game',
    subTitle:'HTML/CSS/JS/jQuery application with a timer component.',
    imgSrcArray:['https://i.imgur.com/NZsO0sH.png'],
    projectDescription:'Users answer a series of simple questions about Star Wars with 10 seconds to answer each question.',
    projectLink:'https://star-wars-trivia.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/TriviaGame'
  },
  // {
  //   title:'Gif-tastic',
  //   subTitle:'HTML/CSS/JS/jQuery app making AJAX calls to the Giphy API.',
  //   imgSrcArray:['https://i.imgur.com/qU04swl.png'],
  //   projectDescription:'Users can click buttons to show GIFs of the item clicked, and can add clickable buttons for anything else via a text input.',
  //   projectLink:'https://giftastic-app.herokuapp.com/',
  //   githubLink:'https://github.com/nicklascschmidt/GifTastic'
  // },
  {
    title:'Train Scheduler',
    subTitle:'HTML/CSS/JS/jQuery application using Moment.js',
    imgSrcArray:['https://i.imgur.com/ScZrp6E.png'],
    projectDescription:'Users submit train schedule information and the application lists the next train, among other information.',
    projectLink:'https://train-scheduler-basic-app.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/Train-Scheduler'
  },
  {
    title:'Dim Sum Collector',
    subTitle:'HTML/CSS/JS/jQuery application',
    imgSrcArray:['https://i.imgur.com/CL6D0L1.png'],
    projectDescription:'Users try to match the given $ amount by clicking on foods, which increments the bill.',
    projectLink:'https://dim-sum-collector-game.herokuapp.com/',
    githubLink:'https://github.com/nicklascschmidt/dim-sum-collector'
  }
];

export default projectArray;