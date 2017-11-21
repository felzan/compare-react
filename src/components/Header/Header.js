import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {

    let menuActive = this.state.isToggleOn ? ' is-active': '';

    return (
      <div className="App">
        
        <nav className="navbar has-shadow">
          <div className="container">

            <div className="navbar-brand">
              <a className="navbar-item">felzan</a>

              <span className={'navbar-burger' + menuActive} onClick={this.handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div className={'navbar-menu' + menuActive}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item r-item"> Home</Link>
                <Link to="/faq" className="navbar-item r-item"> About</Link>
                <Link to="/faq" className="navbar-item r-item"> Contact</Link>
                <Link to="/faq" className="navbar-item r-item"> Faq</Link>
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
        </nav>
      </div>
    );
  }
}

export default Header;
