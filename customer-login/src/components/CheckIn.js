import React, { Component } from 'react';

class CheckIn extends Component {
  constructor() {
    super();
  }

  // generateKeypad(){
  //   for(let i=1; i < 10; i++) {
  //   let newDiv = <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,i)}>i</div>;
  //   document.getElementsByClassName('keypad').append(newDiv);
  //   }
  // }

  render() {
    return (
      <div id= 'checkin-component' className= 'component-outline'>
        <header className='component-header'>
          <h1 className='component-title'>Loyalty Check-in{this.props.phoneNumber}</h1>
        </header>
        <div>
          <h3 className='checkIn-title'>Welcome! Please enter your phone number to check-in and earn points.</h3>
        </div>

        {/* Keypad */}
        <div className= 'keypad'>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,1)}>1</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,2)}>2</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,3)}>3</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,4)}>4</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,5)}>5</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,6)}>6</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,7)}>7</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,8)}>8</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,9)}>9</div>
          <div className= 'keypad-number back-key' onClick={this.props.trimPhoneNumber}>&lt;</div>
          <div className= 'keypad-number' onClick={this.props.appendNumber.bind(this,0)}>0</div>
          <div id= 'checkIn' className= 'keypad-number'>Check-in &#10004;</div>
        </div>
      </div>
    );
  }
}

export default CheckIn;
