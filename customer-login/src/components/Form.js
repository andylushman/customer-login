import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id= 'form-component' className= 'component-outline'>
        <header className='component-header'>
          <h1 className='component-title'>Please Create Account</h1>
        </header>
        <form action=''>
          First name:<br/>
          <input type='text'/><br/>
          Last name:<br/>
          <input type='text'/><br/>
          Email:<br/>
          <input type='email'/><br/><br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default Form;
