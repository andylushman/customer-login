import React, { Component } from 'react';
import logo from '../images/logo.png';

class Header extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;
