import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class AddContact extends Component {
  state = {
    contacts: [],
    filter: '',
    contactName: '',
    contactNumber: '',
  };

  addContact = newContact => {
    let existedContact = this.state.contacts.some(
      contact =>
        contact.contactName === newContact.contactName &&
        contact.contactNumber === newContact.contactNumber
    );
    if (existedContact) {
      Notify.warning('This contact already exists');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = index => {
    console.log(index);
    this.setState(prevState => {
      const updatedContacts = [...prevState.contacts];
      updatedContacts.splice(index, 1);
      return { contacts: updatedContacts };
    });
  };

  componentDidMount() {
    const storedContact = localStorage.getItem('contacts');
    this.setState({
      contacts: JSON.parse(storedContact),
    });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <ContactForm addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default AddContact;
