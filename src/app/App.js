import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


import Landing from './Landing';
import Stack from './Stack';
import MatchDetail from './MatchDetail';
import Messages from './Messages';
import Detail from './Detail';

// import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  componentWillMount() {
    const script = document.createElement("script");

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/Stack" component={Stack} />
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
