import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <div className="splash-page">
        
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

export default Landing;
