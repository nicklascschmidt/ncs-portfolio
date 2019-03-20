import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

// pages
import Main from './pages/main';
import Projects from './pages/projects';
import Resume from './pages/resume';
import NotFound from './pages/notFound';

// components
import NavBar from './components/nav/NavBar';
import Background from './components/background/Background';
import FooterComponent from './components/footer/Footer';

// style
import './style/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
        <Background>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />

            <Route component={NotFound} />
          </Switch>
          <FooterComponent />
        </Background>
        </ScrollToTop>
      </Router>
    )
  }
};

export default App;

