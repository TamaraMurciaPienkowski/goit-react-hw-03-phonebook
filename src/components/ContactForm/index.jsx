import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const INITIAL_STATE = {
  contactName: '',
  contactNumber: '',
};

class ContactForm extends Component {
  state = {
    contactName: '',
    contactNumber: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  hadleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.hadleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="contactName"
              value={this.state.contactName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="contactNumber"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.contactNumber}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
