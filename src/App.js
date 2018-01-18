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
    this.handleUserSubmit=this.handleUserSubmit.bind(this);
    this.signIn=this.signIn.bind(this);
    this.checkPhone=this.checkPhone.bind(this);

    this.state = {
      data: [],
      phoneNumber: '',
      checkInAllowed: false,
      firstName: '',
      lastName: '',
      points: '',
      lastLogin: ''
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

  //API Function
  handleUserSubmit(user) {
    let users = this.state.data;
    this.setState({ data: user });
    axios.post(this.props.url, user)
      .catch(err => {
        console.error(err);
        this.setState({ data: user });
      });
  }

  signIn(){
    if (this.state.checkInAllowed) {
      this.checkPhone();
    }
  }

  checkPhone(){
    let newPhoneNumber=this.state.phoneNumber;
    newPhoneNumber = newPhoneNumber.replace(/\D/g,'');
    console.log(newPhoneNumber);
    axios.get(this.props.url, {
    params: {
      phoneNumber: newPhoneNumber
    }
    })
    .then((res) => {
      console.log(res);
      let userPhone = res.data[0].phoneNumber;
      let userFirstName = res.data[0].firstName;
      let userLastName = res.data[0].lastName;
      let lastLogin = res.data[0].lastLogin;
      this.setState({
        phoneNumber: userPhone,
        firstName: userFirstName,
        lastName: userLastName,
        lastLogin: lastLogin
      });
      console.log(this.state.phoneNumber);
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.lastLogin);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="app-component">
        <Header />
        <CheckIn phoneNumber={this.state.phoneNumber} appendNumber={this.appendNumber} trimPhoneNumber= {this.trimPhoneNumber} signIn= {this.signIn} />
        <UserPage firstName= {this.state.firstName} lastName= {this.state.lastName} phoneNumber= {this.state.phoneNumber} lastLogin= {this.state.lastLogin} />
        <Form onCommentSubmit={this.handleUserSubmit} />
      </div>
    );
  }
}

export default App;


// Questions for Zach:
// 1. How to setup a dynamic route for phone number?
// 2. Explaination of Server.js and models... MVC Model?
// 3. Do you have to put 'props' in the consturction(props) and super(props) of child components
// 4. Explination of react initialization componients such as componentWillMount() and componentDidMount() etc.
