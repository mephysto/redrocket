import React, { Component } from 'react';

class DiscMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="discMessage">
        <p>Dear visitor, thank you for visiting the demo we created for the hackathon organised by
          NASA's <a href="https://2017.spaceappschallenge.org/challenges/earth-and-us/whats-dinner/details" target="_blank">Space Apps Challenge</a>.
          <br />For this we created a mobile app, which is best viewed on mobile.<br/>
          For the best experience (and the fact that it breaks on desktop), we 
          hope that you will continue to look at our web app on your mobile phone.
        </p>
      </div>
    );
  }
}

export default DiscMessage;
