import React, { Component } from 'react';

class CheckIn extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id= 'CheckIn-Component' className= 'Component-outline'>
        <header className='CheckIn'>
          <h1 className='CheckIn-title'>Loyalty Check-in</h1>
        </header>
        <div>
          <h3 className='CheckIn-title'>Welcome! Please enter your phone number to check-in and earn points.</h3>
        </div>

        {/* Keypad */}
        <div className= 'Keypad'>
          <div className= 'Keypad-number'>1</div>
          <div className= 'Keypad-number'>2</div>
          <div className= 'Keypad-number'>3</div>
          <div className= 'Keypad-number'>4</div>
          <div className= 'Keypad-number'>5</div>
          <div className= 'Keypad-number'>6</div>
          <div className= 'Keypad-number'>7</div>
          <div className= 'Keypad-number'>8</div>
          <div className= 'Keypad-number'>9</div>
          <div className= 'Keypad-number Back-key'>&lt;</div>
          <div className= 'Keypad-number'>0</div>
          <div className= 'Keypad-number Check-key'>Check-in &#10004;</div>
        </div>
      </div>
    );
  }
}

export default CheckIn;
