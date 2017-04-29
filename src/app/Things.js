import React, { Component } from 'react';

class Things extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div className="header"></div>

        <div className="card">
          <div className="card__image"></div>
          <div className="card__details">
            <h1 className="card__heading">Harissa Vegetable and egg tray bake</h1>
            <div className="card__detail card__detail--clock">
              Est. eat time 7pm
            </div>
            <div className="card__detail card__detail--user">
              $13
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

        <div className="search">
          <input className="search__input" id="search" type="text" placeholder="What are you craving?" />
        </div>
      </div>
    );
  }
}

export default Things;
