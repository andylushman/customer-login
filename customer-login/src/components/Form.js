import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
    this.handlefirstNameChange = this.handlefirstNameChange.bind(this);
    this.handlelastNameChange = this.handlelastNameChange.bind(this);
    this.handleemailChange = this.handleemailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlephoneChange = this.handlephoneChange.bind(this);
  }

  handlefirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }
  handlelastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleemailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlefirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handlephoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let firstName = this.state.firstName.trim();
    let lastName = this.state.lastName.trim();
    let email = this.state.email.trim();
    let phone = this.state.phone.trim();
    if (!firstName || !lastName || !email || !phone) {
      alert('Please fill in all information')
      return;
    }
    this.props.onCommentSubmit({ firstName: firstName, lastName: lastName, email: email, phone: phone});
    this.setState({ firstName: '', lastName: '', email: '', phone: ''});
  }

  render() {
    return (
      <div id= 'form-component' className= 'component-outline'>
        <header className='component-header'>
          <h1 className='component-title'>Please Create Account</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          First name:<br/>
          <input
          type='text'
          placeholder='Your first name...'
          value={ this.state.firstName}
          onChange={this.handlefirstNameChange}/>
          <br/>
          Last name:<br/>
          <input
          type='text'
          placeholder='Your last name...'
          value={ this.state.lastName }
          onChange={this.handlelastNameChange}/>
          <br/>
          Email:<br/>
          <input
          type='Email'
          placeholder='Your email address...'
          value={ this.state.email }
          onChange={this.handleemailChange}/>
          <br/>
          Phone:<br/>
          <input
          type='tel'
          placeholder='Your phone number...'
          value={this.state.phone}
          onChange={this.handlephoneChange}/>
          <br/><br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default Form;
