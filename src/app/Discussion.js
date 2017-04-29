import React, { Component } from 'react';

import GSAP from 'react-gsap-enhancer';
import {TimelineMax} from 'gsap';

class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.startAnimation = this.startAnimation.bind(this);
  }
  componentDidMount() {
    console.log('start aimation');
    this.animation = new TimelineMax()
      .fromTo('.dcard__card_1', 0.5, {x:0}, {x:500}, 0)
      .fromTo('.dcard__card_2', 0.5, {x:0}, {x:500}, 1)
      .fromTo('.dcard__card_3', 0.5, {x:0}, {x:500}, 2)
      .fromTo('.dcard__card_4', 0.5, {x:0}, {x:500}, 3)
      .fromTo('.dcard__card_5', 0.5, {x:0}, {x:500}, 4)
      .fromTo('.dcard__card_6', 0.5, {x:0}, {x:500}, 5)
      .to('.dcard__card', 0.5, {x:0}, 7)
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
          <div className="dcard__card dcard__card_6" style={{backgroundImage: "url(http://placehold.it/380x475/f97c26/ffffff&text=slide6)"}} />
          <div className="dcard__card dcard__card_5" style={{backgroundImage: "url(http://placehold.it/380x475/f97c26/ffffff&text=slide5)"}} />
          <div className="dcard__card dcard__card_4" style={{backgroundImage: "url(http://placehold.it/380x475/f97c26/ffffff&text=slide4)"}} />
          <div className="dcard__card dcard__card_3" style={{backgroundImage: "url(http://placehold.it/380x475/f97c26/ffffff&text=slide3)"}} />
          <div className="dcard__card dcard__card_2" style={{backgroundImage: "url(http://placehold.it/380x475/f97c26/ffffff&text=slide2)"}} />
          <div className="dcard__card dcard__card_1" style={{backgroundImage: "url(http://placehold.it/380x475/f97c26/ffffff&text=slide1)"}} />
        </div>
      </div>
    );
  }
}

export default GSAP()(Discussion);