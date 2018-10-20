import React, { Component } from 'react';

import './style.css';

const importAll = (r) => {
  return r.keys().map(r);
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      currentImage: 0
    };
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  render() {
    return (
      <div>
        <img className="gramPic" src={images[this.state.currentImage]} alt="instagram" />
        <button type="button" className="btn btn-dark" onClick={this.nextPhoto}>Next</button>
      </div>
    );
  }

  nextPhoto = () => {
    this.setState({ currentImage: (this.state.currentImage + 1) % images.length})
  }

}


