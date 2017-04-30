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
          <div className="profile__name">{this.props.name}</div>
          <div className="profile__rating">{this.props.rating}</div>
        </div>
      </div>
    );
  }
}

export default CardProfile;
