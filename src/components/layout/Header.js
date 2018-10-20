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
        <Link to="/" className="navbar-brand">
         <img src={logo} className="headerlogo" />
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">

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


Header.defaaultProps = {
  branding: "My App"
}

Header.propTypes = {
  branding: propTypes.string.isRequired
};



export default Header;
