import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div className="App">
        
        <div className="navbar has-shadow">
          <div className="container">

            <div className="navbar-brand">
              <a className="navbar-item">felzan</a>
            </div>

            <span classNameName="navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="nav-item r-item"> Home</Link>
                <Link to="/faq" className="nav-item r-item"> About</Link>
                <Link to="/faq" className="nav-item r-item"> Contact</Link>
                <Link to="/faq" className="nav-item r-item"> Faq</Link>
              </div>

              <div className="navbar-item">
                <p className="control">
                  <a href="" className="button is-primary is-outlined">
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>
                      Join now
                    </span>
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
