import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import textlogo from '../../images/instapool.png';
import './styles.css';


const FEED = '/feed';

export default class Home extends Component {

  render() {
    return (
      <div>
      <h1>Get Started With </h1>

        <div className="textlogocontainer">
          <img src={textlogo} className="mainlogo"></img>
        </div>

        <Link to={FEED}>
          <button type="button" className="btn btn-dark">Get Started And Help Save The World!</button>
        </Link>

        <div className="maincontent">
          <p className="maincontent">
            Earn money by browsing instagram while making the world more connected and bring people together while solving important social issues and being your own boss and helping others and share experiences while being paid to browse instagram!
          </p>
        </div>
      </div>
    );
  }
}
