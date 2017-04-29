import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className="search">
          <input className="search__input" id="search" type="text" placeholder="What are you craving?" />
        </div>
    );
  }
}

export default Search;
