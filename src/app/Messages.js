import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="container">
        <div className="messages__header">
          <h1 className="messages__heading">Harissa Vegetable and egg tray bake</h1>
          <div className="messages__detail messages__detail--clock">Est. eat time 7pm</div>
          <div className="messages__detail messages__detail--user">$13</div>
        </div>
        <div className="messages">
          <div className="message">
            <div className="message--from">
              <p>Hi!</p>
            </div>
          </div>
          <div className="message">
            <div className="message--to">
              <p>Hi! That recipe looks really awesome! Good choice!<br />🍽 😋</p>
            </div>
          </div>
          <div className="message">
            <div className="message--from">
              <p>Thanks! looking forward to it, I've been wanting to make it for a while</p>
            </div>
          </div>
          <div className="message">
            <div className="message--to">
              <p>When do you want me to come around and help make it? I'm a great sous chef!</p>
            </div>
          </div>
          <div className="message">
            <div className="message--from">
              <p>Haha, I'll be the judge of that! Just going to grab the ingredients now.</p>
            </div>
          </div>
          <div className="message">
            <div className="message--from">
              <p>How about 6:30?</p>
            </div>
          </div>
          <div className="message">
            <div className="message--to">
              <p>Great, see you then. Ugghhh now all I can think about is dinner!</p>
            </div>
          </div>
          <div className="message">
            <div className="message--from">
              <p>Haha, good thing 6:30 isn’t far away! Here’s where you’ll find me:</p>
            </div>
          </div>
          <div className="message">
            <div className="message--from message--image"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
