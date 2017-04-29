import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


import Landing from './Landing';
import MatchDetail from './MatchDetail';
import Messages from './Messages';
import Detail from './Detail';

// import logo from '../logo.svg';
import '../styles/global.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/matchdetail" component={MatchDetail} />
          <Route path="/detail" component={Detail} />
          <Route path="/messages" component={Messages} />
          <Footer /> 
        </div>       
      </Router>
    );
  }
}

export default App;
