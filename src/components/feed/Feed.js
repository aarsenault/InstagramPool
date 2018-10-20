import React, { Component } from 'react';
const axios = require('axios');


const importAll = (r) => {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../public/images', false, /\.(png|jpe?g|svg)$/));

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      currentImage: 0,
    };
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  handleToggleCall = () => {
    // if (!this.state.onPhone) {
    //   this.setState({
    //     muted: false,
    //     onPhone: true
    //   })
      // make outbound call with current number
      // var n = '+' + this.state.countryCode + this.state.currentNumber.replace(/\D/g, '');
    // this.setState({log: 'Calling ' + n})
    // } else {
    //   // hang up call in progress
    //   window.Twilio.Device.disconnectAll();
    // }
  }

  componentDidMount() {
    // Fetch window.Twilio token
    axios.post('https://safe-inlet-79187.herokuapp.com/token/generate')
      .then((response) => {
        console.log(response);
        window.Twilio.Device.setup(response.data.token);
        window.Twilio.Device.ready(function() {
          const n = '+16476884244';
          window.Twilio.Device.connect({ phoneNumber: n });

        });
      })
  }

  render() {
    return (
      <div>
        <div>
          Logo
        </div>
        <img src={images[this.state.currentImage]} alt="instagram" />
        <button type="button" className="btn btn-dark" onClick={this.nextPhoto}>Next</button>
      </div>
    );
  }

  nextPhoto = () => {
    this.setState({ currentImage: this.state.currentImage + 1})
  }
}


