import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          <Route exact path="/" component={Splash} />
          <Route path="/landing" component={Landing} />
          <Route path="/stack" component={Stack} />
          <Route path="/match" component={MatchDetail} />
          <Route path="/eating" component={Eating} />
        </div>
      </Router>
    );
  }
}

export default App;
