import React, { Component } from 'react';

import DiscMessage from './DiscMessage';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toNextPage = this.toNextPage.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0,1);
  }

  toNextPage(){
    // console.log('cicked');
    // window.location = '/#/landing';
    // window.location = '/taste-buddy/#/landing';
    window.location.hash = 'landing';
  }
  render() {
    return (
      <div className="splash" onClick={this.toNextPage}>
        <DiscMessage />
      </div>
    );
  }
}

export default Splash;
