import React, { Component } from 'react';

import GSAP from 'react-gsap-enhancer';
import {TimelineMax} from 'gsap';
import {Power0, Power4} from 'gsap';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.moveAnimation = this.moveAnimation.bind(this);
  }
  componentDidMount() {
    new TimelineMax({
      repeat: -1
    })
      .fromTo('.landing-page__top .landing-page__slide', 60, {backgroundPositionX: "0px"}, {backgroundPositionX: "-1000px", ease:Power0.easeNone}, 0)
      .fromTo('.landing-page__bottom .landing-page__slide', 60, {backgroundPositionX: "0px"}, {backgroundPositionX: "1000px", ease:Power0.easeNone}, 0)
    ;
    new TimelineMax()
      .fromTo('.landing-page__arrow--left', 2, {x:-400}, {x:-50, ease:Power4.easeOut}, 0)
      .fromTo('.landing-page__arrow--right', 2, {x:400, y: 55}, {x:50, ease:Power4.easeOut}, 0.1)
    ;
  }
  toNextPage(){
    window.location = '/stack';
  }
  render() {
    return (
      <div className="landing-page" onClick={this.toNextPage}>
        
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
