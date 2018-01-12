import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CheckIn from './components/CheckIn';
import UserPage from './components/UserPage';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="App-Component">
        <Header />
        <CheckIn />
        <UserPage />
        <Form />
      </div>
    );
  }
}

export default App;
