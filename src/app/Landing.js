import React, { Component } from 'react';

import GSAP from 'react-gsap-enhancer';
import {TimelineMax} from 'gsap';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.moveAnimation = this.moveAnimation.bind(this);
  }
  moveAnimation() {
    return new TimelineMax()
      .fromTo('.landing-page__top .landing-page__slide', 2, {x:0}, {x:-200}, 0)
    ;;
  }
  render() {
    return (
      <div className="landing-page" onClick={this.moveAnimation}>
        
        <div className="landing-page__top">
          <div className="landing-page__slide"></div>
        </div>
        
        <div className="landing-page__bottom">
          <div className="landing-page__slide landing-page__slide--two"></div>
        </div>
        
        <div className="landing-page__arrows">
          <div className="landing-page__arrow landing-page__arrow--left">
            I want to cook
          </div>
          <div className="landing-page__arrow landing-page__arrow--right">
            I want to browse
          </div>
        </div>

      </div>
    );
  }
}

export default GSAP()(Landing);
