import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className="slider-container">
        <div className="left-slide">
          <div className="first-left-slide">
            <h1>Nike</h1>
            <p>new collection</p>
          </div>
          <div className="second-left-slide">
            <h1>Splash</h1>
            <p>new collection</p>
          </div>
          <div className="third-left-slide">
            <h1>Crop Shoes</h1>
            <p>new collection</p>
          </div>
        </div>
        <div className="right-slide">
          <div className="right-slide-img-one"></div>
          <div className="right-slide-img-two"></div>
          <div className="right-slide-img-three"></div>
        </div>
        <div className="action-buttons">
          <button className="down-button">
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="up-button">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
