import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../logos/instapoolpurplogo.png';

export default class Header extends Component {

  render() {
    const {branding} = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bkpurp mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <div className="nav-link call" onClick={this.props.handleCall}>
                  {this.props.onPhone ? "Disconnect" : "Call"}
                </div>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-sign-out-alt"></i> Sign-Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}
