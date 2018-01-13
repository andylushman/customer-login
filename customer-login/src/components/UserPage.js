import React, { Component } from 'react';

class UserPage extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id= 'userPage-component' className= 'component-outline'>
        <header className='component-header'>
          <h1 className='component-title'>{/*Name*/}'s Account</h1>
        </header>
        <p>You just earned {/*Points*/} for logging in!</p>
        <p>You have loged-in {/*number of logins*/} times.</p>
        <p> Total points:{/*point total*/}</p>

        {/* email with points Total */}
        {/* can't login for the next 5 minutes */}
      </div>
    );
  }
}

export default UserPage;
