import React, { Component } from 'react';


import Header from './Header';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  createScript(url) {
    const script = document.createElement("script");
    script.src = url;
    // script.defer = true;
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
      <div>
        <Header />
        <main className="tinderforbananas">
          <section className="view view--swipelist">
            <tinderforbananas-item class="item item--next hidden" inmovable>
              <picture></picture>
              <div className="item__details">

                <div className="card">
                  <div className="card__image"></div>
                  <div className="card__details">
                    <h1 className="card__heading">Harissa Vegetable and egg tray bake</h1>
                    <div className="card__detail card__detail--clock">Est. eat time 7pm</div>
                    <div className="card__detail card__detail--user">$13</div>
                  </div>
                  <div className="profile">
                    <div className="profile__image"></div>
                    <div className="profile__details">
                      <div className="profile__name">Emma</div>
                      <div className="profile__rating">4.45</div>

                    </div>
                  </div>

                  {/*<span className="item__details__name"></span>,
                  <span className="item__details__age"></span>
                  <span className="item__details__job"></span>*/}
                </div>
                {/*<span className="item__details__name"></span>,
                <span className="item__details__age"></span>
                <span className="item__details__job"></span>*/}
              </div>
            </tinderforbananas-item>
            <tinderforbananas-item class="item item--top">
              <picture>
                <div className="action action--nope">Nope</div>
                <div className="action action--like">Like</div>
                <div className="action action--superlike">Super<br />Like</div>
              </picture>
              <div className="item__details">
                <div className="card">
                  <div className="card__image"></div>
                  <div className="card__details">
                    <h1 className="card__heading">Harissa Vegetable and egg tray bake</h1>
                    <div className="card__detail card__detail--clock">Est. eat time 7pm</div>
                    <div className="card__detail card__detail--user">$13</div>
                  </div>
                  <div className="profile">
                    <div className="profile__image"></div>
                    <div className="profile__details">
                      <div className="profile__name">Emma</div>
                      <div className="profile__rating">4.45</div>

                    </div>
                  </div>

                  <span className="item__details__name"></span>,
                  <span className="item__details__age"></span>
                  <span className="item__details__job"></span>
                </div>
              </div>
            </tinderforbananas-item>
          </section>
          <section className="view view--details hidden">
            <tinderforbananas-details>
              <tinderforbananas-carousel></tinderforbananas-carousel>
              {/* profile imags will go here */}
              <section className="item__details">
                <span className="item__details__name"></span>,
                <span className="item__details__age"></span>
                <span className="item__details__job"></span>
                <span className="item__details__distance"></span>
              </section>
              {/* sustainability data here*/}
              <section className="description">
                <div>
                  <img src="http://placehold.it/280x100" alt="carousel 1"/>
                </div>
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
      </div>
    );
  }
}

export default Stack;
