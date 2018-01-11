import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CheckIn from './components/CheckIn';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <Header />
        <CheckIn />
      </div>
    );
  }
}

export default App;
