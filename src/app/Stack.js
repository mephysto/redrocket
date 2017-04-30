import React, { Component } from 'react';


import Header from './Header';
import CardProfile from './CardProfile';
import RecipeStats from './RecipeStats';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toMatchPage = this.toMatchPage.bind(this);
  }
  createScript(url) {
    const script = document.createElement("script");
    script.src = url;
    return script;
  }
  refreshpage() {
    window.location = '/stack';
  }
  toMatchPage() {
    window.location = '/match';
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
                  <CardProfile image="img/emma.jpg" name="Emma" rating="4.45"/>
                </div>
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
                  <CardProfile image="img/emma.jpg" name="Emma" rating="4.45"/>
                  <span className="item__details__name"></span>,
                  <span className="item__details__age"></span>
                  <span className="item__details__job"></span>
                </div>
              </div>
            </tinderforbananas-item>
          </section>
          <section className="view view--details hidden">
            <div className="view__details--words">
              <h1 className="view__heading">Harissa Vegetable and egg tray bake</h1>
              <div className="view__detail view__detail--clock">Est. eat time 7pm</div>
              <div className="view__detail view__detail--user">$13</div>
            </div>
            <tinderforbananas-details>
              <tinderforbananas-carousel></tinderforbananas-carousel>
              {/* profile imags will go here */}
              <section className="item__details full-detail">
                <CardProfile image="img/emma.jpg" onClick={this.refreshpage} name="Emma" rating="4.45"/>
                <CardProfile image="img/cross.png" onClick={this.toMatchPage} name="Join" rating="" />
              </section>
              {/* sustainability data here*/}
              <RecipeStats />
            </tinderforbananas-details>
          </section>
        </main>
        <div className="searchBar">
          <div className="searchBar__wrapper">
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451" width="451" height="451">
                <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" />
              </svg>
            </div>
            <input type="text" placeholder="What are you craving?"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;
