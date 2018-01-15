import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import CheckIn from './components/CheckIn';
import UserPage from './components/UserPage';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.appendNumber=this.appendNumber.bind(this);
    this.trimPhoneNumber=this.trimPhoneNumber.bind(this);
    this.checkInButton=this.checkInButton.bind(this);
    this.state = {
      phoneNumber: '',
      checkInAllowed: false
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
      case 8:
        phoneNumber += '-';
        break;
      case 12:
        this.checkInButton();
        break;
      default:
        break;
    }
    console.log(phoneNumber.length);
    console.log(phoneNumber);
    phoneNumber += number;

    this.setState({phoneNumber: phoneNumber });
    this.checkInButton();
  }

  checkInButton(){
    if (this.state.phoneNumber.length == 12) {
      let newClass = document.getElementById('checkIn');
      newClass.className += ' check-key';
      this.setState({checkInAllowed: true});
    } else {
      let newClass = document.getElementById('checkIn');
      newClass.className = 'keypad-number';
      this.setState({checkInAllowed: false});
    }
    console.log(this.state.checkInAllowed);
  }

  trimPhoneNumber(){
    let str = this.state.phoneNumber;
    str = str.slice(0, -1);
    this.setState({phoneNumber: str});
    this.checkInButton();
  }

  render() {
    return (
      <div id="app-component">
        <Header />
        <CheckIn phoneNumber={this.state.phoneNumber} appendNumber={this.appendNumber} trimPhoneNumber= {this.trimPhoneNumber} />
        <UserPage />
        <Form />
      </div>
    );
  }
}

export default App;
