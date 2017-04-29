import React, { Component } from 'react';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  createScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.defer = true;
    return script;
  }
  componentDidMount() {
    document.body.appendChild(this.createScript("bananas/custom-elements.min.js"));
    document.body.appendChild(this.createScript("bananas/helper.js"));
    document.body.appendChild(this.createScript("bananas/ce-item.js"));
    document.body.appendChild(this.createScript("bananas/ce-carousel.js"));
    document.body.appendChild(this.createScript("bananas/ce-details.js"));
    document.body.appendChild(this.createScript("bananas/app.js"));
  }
  render() {
    return (
      <main className="tinderforbananas">
        <section className="view view--swipelist">
          <header>
            <p>Tinder for Bananas</p>
            <p className="copyright">Made with 🍌 by <a href="https://twitter.com/DasSurma">Surma</a>, Code on <a href="https://github.com/surma/tinderforbananas.com">GitHub</a></p>
          </header>
          <tinderforbananas-item className="item item--next hidden" inmovable>
            <picture>
            </picture>
            <div className="item__details">
              <span className="item__details__name"></span>,
              <span className="item__details__age"></span>
              <span className="item__details__job"></span>
            </div>
          </tinderforbananas-item>
          <tinderforbananas-item className="item item--top">
            <picture>
              <div className="action action--nope">Nope</div>
              <div className="action action--like">Like</div>
              <div className="action action--superlike">Super<br />Like</div>
            </picture>
            <div className="item__details">
              <span className="item__details__name"></span>,
              <span className="item__details__age"></span>
              <span className="item__details__job"></span>
            </div>
          </tinderforbananas-item>
          <nav className="view--swipelist__controls">
            <button className="control control--small control--undo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
                <path fill="none" d="M -15 0 A 15 15 0 1 0 0 -15" />
                <path d="M 0 -15L 0 -22L -10 -15L 0 -8z" />
              </svg>
            </button>
            <button className="control control--big control--nope">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
                <line x1="-15" y1="-15" x2="15" y2="15" />
                <line x1="15" y1="-15" x2="-15" y2="15" />
              </svg>
            </button>
            <button className="control control--big control--like">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 90" preserveAspectRatio="xMidYMid meet">
                <path d="M 0 15L -15 0A 10 10 0 1 1 0 -10A 10 10 0 1 1 15 0L 15 0z" />
              </svg>
            </button>
            <button className="control control--small control--superlike">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
                <path d="M 0.000 10.000L 11.756 16.180L 9.511 3.090L 19.021 -6.180L 5.878 -8.090L 0.000 -20.000L -5.878 -8.090L -19.021 -6.180L -9.511 3.090L -11.756 16.1805z" />
              </svg>
            </button>
          </nav>
        </section>
        <section className="view view--details hidden">
          <tinderforbananas-details>
            <tinderforbananas-carousel></tinderforbananas-carousel>
            <section className="item__details">
              <span className="item__details__name"></span>,
              <span className="item__details__age"></span>
              <span className="item__details__job"></span>
              <span className="item__details__distance"></span>
            </section>
            <section className="description">
            </section>
          </tinderforbananas-details>
          <nav className="view--details__controls">
            <button className="control control--big control--nope control--inverted">
            </button>
            <button className="control control--big control--superlike control--inverted">
            </button>
            <button className="control control--big control--like control--inverted">
            </button>
          </nav>
        </section>
      </main>
    );
  }
}

export default Stack;
