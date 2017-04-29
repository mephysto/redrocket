import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Splash from './Splash';
import Landing from './Landing';
import Stack from './Stack';
import MatchDetail from './MatchDetail';
import Eating from './Eating';
import Detail from './Detail';
import Things from './Things';

// import logo from '../logo.svg';
import '../styles/global.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Splash} />
          <Route path="/Landing" component={Landing} />
          <Route path="/Stack" component={Stack} />
          <Route path="/match" component={MatchDetail} />
          <Route path="/detail" component={Detail} />
          <Route path="/Eating" component={Eating} />
          <Route path="/things" component={Things} />
        </div>
      </Router>
    );
  }
}

export default App;
