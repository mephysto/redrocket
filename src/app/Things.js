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
            <div className="card__detail">
              Est. eat time 7pm
            </div>
            <div className="card__detail">
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
      </div>
    );
  }
}

export default Things;
