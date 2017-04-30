import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="header">
        <img src="img/logo.png" alt="Taste Buds" />
      </div>
    );
  }
}

export default Header;
