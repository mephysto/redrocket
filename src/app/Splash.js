import React, { Component } from 'react';

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
    console.log('cicked');
    window.location = '/landing';
  }
  render() {
    return (
      <div className="splash" onClick={this.toNextPage}>
      </div>
    );
  }
}

export default Splash;
