import React, { Component } from 'react';
import axios from 'axios';

import './style.css';
import logo from '../../logos/logo.png';

const importAll = (r) => {
  return r.keys().map(r);
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      currentImage: 0,
    };
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  componentDidMount() {
    // Fetch window.Twilio token
    axios.post('https://safe-inlet-79187.herokuapp.com/token/generate')
      .then((response) => {
        console.log(response);
        window.Twilio.Device.setup(response.data.token);
        window.Twilio.Device.disconnect(function() {
          window.Twilio.Device.disconnectAll();
          window.location.href = `${window.location.origin}/home`;
        });
        window.Twilio.Device.ready(function() {
          const n = '+16476884244';
          window.Twilio.Device.connect({ phoneNumber: n });
        });
      })
  }

  render() {
    return (
      <div>
        <img className="gramPic" src={images[this.state.currentImage]} alt="instagram" />
        <button type="button" className="btn btn-dark" onClick={this.nextPhoto}>Next</button>
        <div>
          <img src={logo} className="toplogo"></img>
        </div>
      </div>
    );
  }

  nextPhoto = () => {
    this.setState({ currentImage: (this.state.currentImage + 1) % images.length})
  }
}


