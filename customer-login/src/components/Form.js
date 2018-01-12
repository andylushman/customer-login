import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id= 'Form-Component' className= 'Component-outline'>
        <form action="">
          First name:<br/>
          <input type="text"/><br/>
          Last name:<br/>
          <input type="text"/><br/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Form;
