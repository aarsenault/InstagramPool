import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div>
          Logo
        </div>
        <button type="button" className="btn btn-dark" onClick={makePhoneCall}>Start</button>
      </div>
    );
  }
}

const makePhoneCall = () => {
  console.log('call Adriel');
}
