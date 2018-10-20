import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../logos/instapoolpurplogo.png';

const Header = (props) => {
  const {branding} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bkpurp mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
        <img src={logo} className="headerlogo" />
        </a>
        <div>
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus"></i> Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i className="fas fa-question"></i> About
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}


Header.defaaultProps = {
  branding: "My App"
}

Header.propTypes = {
  branding: propTypes.string.isRequired
};



export default Header;
