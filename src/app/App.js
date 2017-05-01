import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Splash from './Splash';
import Landing from './Landing';
import Stack from './Stack';
import MatchDetail from './MatchDetail';
import Eating from './Eating';

// import logo from '../logo.svg';
import '../styles/global.min.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/taste-buddy/" component={Splash} />
          <Route path="/taste-buddy/landing" component={Landing} />
          <Route path="/taste-buddy/stack" component={Stack} />
          <Route path="/taste-buddy/match" component={MatchDetail} />
          <Route path="/taste-buddy/Eating" component={Eating} />
        </div>
      </Router>
    );
  }
}

export default App;
