import React, { Component } from 'react';
import logo from '../images/logo.png';

class Header extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;
