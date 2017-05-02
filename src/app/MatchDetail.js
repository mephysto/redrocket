import React, { Component } from 'react';

import CardProfile from './CardProfile';
import DiscMessage from './DiscMessage';

class MatchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  toNextPage(){
    // window.location = '/eating';
    // window.location = '/taste-buddy/eating';
    window.location.hash = 'eating';
  }
  render() {
    return (
      <div className="container match__container">
        <DiscMessage />
        <h1 className="match__heading">It's a Match!</h1>
        <div className="matches">
          <CardProfile image="img/emma.jpg" name="Emma" rating="4.45"/>
          <CardProfile image="img/chris.jpg" name="Chris" rating="4.74"/>
        </div>
        <div className="match__button" onClick={this.toNextPage}>Get Started</div>
        <div className="match__menu">
          What's on the menu:<br />
          <span>Harissa Vegetable<br />and Egg Tray Bake</span>
        </div>
        <div className="match__time">
          <span>@7PM</span><br />
          add to calendar &raquo;
        </div>
      </div>
    );
  }
}

export default MatchDetail;
