import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './Landing';
import Stack from './Stack';
import MatchDetail from './MatchDetail';
import Messages from './Messages';
import Detail from './Detail';
import Things from './Things';

// import logo from '../logo.svg';
import '../styles/global.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/Stack" component={Stack} />
          <Route path="/matchdetail" component={MatchDetail} />
          <Route path="/detail" component={Detail} />
          <Route path="/messages" component={Messages} />
          <Route path="/things" component={Things} />
        </div>       
      </Router>
    );
  }
}

export default App;
