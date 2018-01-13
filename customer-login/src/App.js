import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CheckIn from './components/CheckIn';
import UserPage from './components/UserPage';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.appendNumber=this.appendNumber.bind(this);
    this.state = {
      phoneNumber: ""
    };
  }

  appendNumber(number){
    let phoneNumber = this.state.phoneNumber;

    number = number.toString();
    switch (phoneNumber.length) {
      case 0:
        phoneNumber += '(';
        break;
      case 4:
        phoneNumber += ')';
        break;
      default:
        break;
    }
    console.log(phoneNumber.length);
    console.log(phoneNumber);
    phoneNumber += number;

    this.setState({phoneNumber: phoneNumber });
  }

  render() {
    return (
      <div id="app-component">
        <Header />
        <CheckIn phoneNumber={this.state.phoneNumber} appendNumber={this.appendNumber} />
        <UserPage />
        <Form />
      </div>
    );
  }
}

export default App;
