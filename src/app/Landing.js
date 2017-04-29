import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    const orientation = {
      sw: 0,
      sh: 0,
      mx: 0,
      my: 0,
      ox: 0,
      oy: 0
    };

    // this.menuHoverHandler = this.menuHoverHandler.bind(this);

    /**
     * Use this in case we want to leverage device orientation on an element
     * 
     * @param {any} ev 
     */
    document.body.onmousemove = (ev) => {
      orientation.sw = window.innerWidth * 0.5;
      orientation.sh = window.innerHeight * 0.5;
      orientation.mx = ev.clientX;
      orientation.my = ev.clientY;
      orientation.ox = ((orientation.sw - orientation.mx) / orientation.sw).toFixed(2);
      orientation.oy = ((orientation.sh - orientation.my) / orientation.sh).toFixed(2);
      this.tiltLandingCard(orientation.oy * 15, orientation.ox * 20);
    };
  }
  /**
   * Use this in case we want to use device orientation
   * 
   * @param {any} x 
   * @param {any} y 
   * 
   * @memberOf Landing
   */
  tiltLandingCard(x, y) {
    // document.getElementById('maincard').style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg) translate3d(0,0,0px)"
    // document.getElementById('maincard').style.MozTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg) translate3d(0,0,0px)"
  }
  render() {
    return (
      <div className="container">
        Landing start
      </div>
    );
  }
}

export default Landing;
