import React, { Component } from 'react';

class CardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image
    };
  }
  render() {
    return (
      <div className="profile" onClick={this.props.onClick}>
        <div className="profile__image" style={{ backgroundImage: 'url(' + this.state.image + ')' }}></div>
        <div className="profile__details">
          <div className="profile__name">Emma</div>
          <div className="profile__rating">4.45</div>
        </div>
      </div>
    );
  }
}

export default CardProfile;
