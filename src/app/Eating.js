import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import Messages from './Messages';
import Discussion from './Discussion';
import DiscMessage from './DiscMessage';

class Eating extends Component {
  constructor(props) {
    super(props);
    this.handleTap = this.handleTap.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.onPan = this.onPan.bind(this);
    this.transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    this.paneWidth = 414;
    this.currentPane = 0;
    this.paneCount = 0;
    this.options = {
      touchAction: 'compute',
      recognizers: {
        tap: {
          time: 600,
          threshold: 100
        }
      }
    }
  }
  componentDidMount() {
    const stats = document.querySelector('.eating__wrapper');
    document.querySelector('.eating__wrapper').addEventListener(this.transitionEnd, (ev) => {
      document.querySelector('.eating__wrapper').removeClass('transition');
    });
    const stat = document.querySelectorAll('.eating__wrapper > div');
    const statcount = [].slice.call(stat).length
    this.paneCount = statcount;
    const fullWidth = [].slice.call(stat).length * this.paneWidth;
    stats.style.width = `${fullWidth}px`;
  }
  handleTap() {
    console.log('tapped dat');
  }
  onSwipe(ev) {
    console.log('onSwipe', ev.direction);
    switch (ev.direction) {
      case Hammer.DIRECTION_LEFT: // 2
        this.next();
        break;
      case Hammer.DIRECTION_RIGHT: // 4
        this.prev();
        break;
      default:
      break;
    }
  }
  showPane(index) {
    this.setState({currentPane: Math.max(0, Math.min(index, this.paneCount - 1))});
    console.log('go to:', index);
    console.log(-this.currentPane, this.paneWidth, this.paneCount)
    this.setContainerOffsetX(-this.currentPane * this.paneWidth, true);
  }
  setContainerOffsetX(offsetX, doTransition) {
    if (doTransition) {
      document.querySelector('.eating__wrapper').classList.add('transition');
    }
    document.querySelector('.eating__wrapper').style.left = `${offsetX}px`;
  }
  outOfBound() {
    var left = parseInt(document.querySelector('.eating__wrapper').style.left, 10);
    return ( this.currentPane === 0 && left >= 0) ||
      ( this.currentPane === this.paneCount - 1 && left <= -this.paneWidth * (this.paneCount - 1));
  }
  prev() {
    console.log(`go prev. from: ${this.currentPane}, to ${this.currentPane - 1}`);
    this.showPane(--this.currentPane);
  }
  next() {
    console.log(`go next. from: ${this.currentPane}, to ${this.currentPane + 1}`);
    this.showPane(++this.currentPane);
  }
  onPan(e) {
    if (e.type === "pan") {
      e.type = e.additionalEvent;
    }
    switch (e.type) {
      case 'panleft':
      case 'panright':
        // Slow down at the first and last pane.
        if (this.outOfBound()) {
          e.deltaX *= .2;
        }
        this.setContainerOffsetX(-this.currentPane * this.paneWidth + e.deltaX);
        break;
      case 'panend':
      case 'pancancel':
        if (Math.abs(e.deltaX) > this.paneWidth * 0.25) {
          if (e.deltaX > 0) {
            this.prev();
          } else {
            this.next();
          }
        } else {
          this.showPane(this.currentPane);
        }
        break;
      default:
      break;
    }
  }
  render() {
    return (
      <div className="container">
        <DiscMessage />
        <div className="messages__header">
          <h1 className="messages__heading">Harissa Vegetable and egg tray bake</h1>
          <div className="messages__detail messages__detail--clock">Est. eat time 7pm</div>
          <div className="messages__detail messages__detail--user">$13</div>
        </div>
        <Hammer onTap={this.handleTap} onSwipe={this.onSwipe} onPan={this.onPan} onPanEnd={this.onPan} onPanCancel={this.onPan} options={this.options} direction="DIRECTION_HORIZONTAL">
          <div className="eating__wrapper">
            <Messages />
            <Discussion />
          </div>
        </Hammer>
      </div>
    );
  }
}

export default Eating;
