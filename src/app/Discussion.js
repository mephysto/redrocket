import React, { Component } from 'react';

import GSAP from 'react-gsap-enhancer';
import {TimelineMax, TweenMax, Power2} from 'gsap';

class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.startAnimation = this.startAnimation.bind(this);
  }
  componentDidMount() {
    console.log('init aimation');
    this.animation = new TimelineMax()
      .fromTo('.dcard__card_1', 1, {x:0, y:0, rotation:0, scale:1}, {x:500, rotation:20, scale: 0.8, y:-200, ease: Power2.easeInOut}, 0)
      .fromTo('.dcard__card_2', 1, {x:0, y:0, rotation:0, scale:1}, {x:500, rotation:20, scale: 0.8, y:-200, ease: Power2.easeInOut}, "+=0.5")
      .fromTo('.dcard__card_3', 1, {x:0, y:0, rotation:0, scale:1}, {x:500, rotation:20, scale: 0.8, y:-200, ease: Power2.easeInOut}, "+=0.5")
      .fromTo('.dcard__card_4', 1, {x:0, y:0, rotation:0, scale:1}, {x:500, rotation:20, scale: 0.8, y:-200, ease: Power2.easeInOut}, "+=0.5")
      .fromTo('.dcard__card_5', 1, {x:0, y:0, rotation:0, scale:1}, {x:500, rotation:20, scale: 0.8, y:-200, ease: Power2.easeInOut}, "+=0.5")
      .add(TweenMax.staggerTo('.dcard__card', 1.5, { x:0, rotation:0, scale:1, y:0, ease: Power2.easeInOut }, 0.25),  "+=1.5")
      .pause(0)
    ;
  }
  startAnimation() {
    console.log('start aimation');
    this.animation.play(0);
  }
  render() {
    return (
      <div className="discussion__container" onClick={this.startAnimation}>
        <div className="dcard__stack">
          <div className="dcard__card dcard__card_5" style={{backgroundImage: "url(img/discuss-5.png"}} />
          <div className="dcard__card dcard__card_4" style={{backgroundImage: "url(img/discuss-4.png"}} />
          <div className="dcard__card dcard__card_3" style={{backgroundImage: "url(img/discuss-3.png"}} />
          <div className="dcard__card dcard__card_2" style={{backgroundImage: "url(img/discuss-2.png"}} />
          <div className="dcard__card dcard__card_1" style={{backgroundImage: "url(img/discuss-1.png"}} />
        </div>
      </div>
    );
  }
}

export default GSAP()(Discussion);