import React, { Component } from 'react';

class MatchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  toNextPage(){
    window.location = '/eating';
  }
  render() {
    return (
      <div className="container match__container">
        <h1 className="match__heading">It's a Match!</h1>
        <div className="matches">
          <div className="profile">
            <div className="profile__image"></div>
            <div className="profile__details">
              <div className="profile__name">Emma</div>
              <div className="profile__rating">4.45</div>
            </div>
          </div>
          <div className="profile">
            <div className="profile__image"></div>
            <div className="profile__details">
              <div className="profile__name">Emma</div>
              <div className="profile__rating">4.45</div>
            </div>
          </div>
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
