import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FEED = '/feed';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div>
          Logo
        </div>
        <Link to={FEED}>
          <button type="button" className="btn btn-dark">Start</button>
        </Link>
      </div>
    );
  }
}
