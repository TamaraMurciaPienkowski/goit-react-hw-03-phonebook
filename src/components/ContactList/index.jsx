import React, { Component } from 'react';

class ContactList extends Component {
  state = {
    filter: '',
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  filteredContacts = () => {
    const filter = this.state.filter;
    const contacts = this.props.contacts;
    if (filter.length === 0) {
      return contacts;
    }

    return contacts.filter(
      contact => contact.contactName.toLowerCase().indexOf(filter) >= 0
    );
  };

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          <input
            type="text"
            name="filter"
            placeholder="find contact"
            value={this.state.filter}
            onChange={this.handleChange}
          ></input>
          {this.filteredContacts().map(
            ({ contactName, contactNumber }, index) => (
              <li key={index}>
                {contactName}:{contactNumber}
                <button onClick={() => this.props.deleteContact(index)}>
                  usuń
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}
export default ContactList;
