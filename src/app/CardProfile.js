import React, { Component } from 'react';

class CardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="profile">
        <div className="profile__image"></div>
        <div className="profile__details">
          <div className="profile__name">Emma</div>
          <div className="profile__rating">4.45</div>
        </div>
      </div>
    );
  }
}

export default CardProfile;
