import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Main from './pages/main';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import NotFound from './pages/notFound';

// components
import NavBar from './components/nav/NavBar';
import Background from './components/background/Background';

// style
import './style/App.scss';
import { Container } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Background>
          <NavBar />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />

              <Route component={NotFound} />
            </Switch>
        </Background>
      </Router>
    )
  }
};

export default App;

