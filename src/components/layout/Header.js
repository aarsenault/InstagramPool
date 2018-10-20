import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../logos/instapoolpurplogo.png';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      onPhone: false
    };
    this.handleCall = this.handleCall.bind(this);
  }

  render() {
    const {branding} = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bkpurp mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
          <img src={logo} className="headerlogo" />
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <div className="nav-link call" onClick={this.handleCall}>
                  {this.state.onPhone ? "Disconnect" : "Call"}
                </div>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  handleCall = () => {
    // Fetch window.Twilio token
    if (!this.state.onPhone) {
      this.setState({onPhone: true})
      let that = this;
      axios.post('https://safe-inlet-79187.herokuapp.com/token/generate')
        .then((response) => {
          console.log(response);
          window.Twilio.Device.setup(response.data.token);
          window.Twilio.Device.disconnect(function() {
            that.setState({onPhone: false});
            window.Twilio.Device.disconnectAll();
          });
          window.Twilio.Device.ready(function() {
            const n = '+16476884244';
            window.Twilio.Device.connect({ phoneNumber: n });
          });
        })
    }
    else {
      this.setState({onPhone: false})
      window.Twilio.Device.disconnectAll();
    }
  }

}
