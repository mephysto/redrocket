import React, { Component } from 'react';

import GSAP from 'react-gsap-enhancer';
import {TimelineMax} from 'gsap';
import {Elastic} from 'gsap';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.animation = {};
    this.startAnimation = this.startAnimation.bind(this);
  }
  componentDidMount() {
    this.animation = new TimelineMax()
      .set('.message', {scalex:0}, 0)
      .fromTo('.message--1', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, 0)
      .fromTo('.message--2', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .fromTo('.message--3', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .fromTo('.message--4', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .fromTo('.message--5', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .fromTo('.message--6', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .fromTo('.message--7', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .fromTo('.message--8', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .fromTo('.message--9', 1, {scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3)}, "+=0.5")
      .pause(0);
    ;
  }
  startAnimation() {
    console.log('start aimation');
    this.animation.play(0);
  }
  render() {
    return (
      <div className="messages__container" onClick={this.startAnimation}>
        <div className="messages">
          <div className="message message--left message--1">
            <div className="message--from">
              <p>Hi!</p>
            </div>
          </div>
          <div className="message message--right message--2">
            <div className="message--to">
              <p>Hi! That recipe looks really awesome! Good choice!<br />🍽 😋</p>
            </div>
          </div>
          <div className="message message--left message--3">
            <div className="message--from">
              <p>Thanks! looking forward to it, I've been wanting to make it for a while</p>
            </div>
          </div>
          <div className="message message--right message--4">
            <div className="message--to">
              <p>When do you want me to come around and help make it? I'm a great sous chef!</p>
            </div>
          </div>
          <div className="message message--left message--5">
            <div className="message--from">
              <p>Haha, I'll be the judge of that! Just going to grab the ingredients now.</p>
            </div>
          </div>
          <div className="message message--left message--6">
            <div className="message--from">
              <p>How about 6:30?</p>
            </div>
          </div>
          <div className="message message--right message--7">
            <div className="message--to">
              <p>Great, see you then. Ugghhh now all I can think about is dinner!</p>
            </div>
          </div>
          <div className="message message--left message--8">
            <div className="message--from">
              <p>Haha, good thing 6:30 isn’t far away! Here’s where you’ll find me:</p>
            </div>
          </div>
          <div className="message message--left message--9">
            <div className="message--from message--image"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GSAP()(Messages);
