import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  // for (const contact of this.state.contacts) {
  //     if (contact.name === this.state.name) {
  //       alert('is already in contacts');
  //     }
  // }

  handleSubmit = e => {
    e.preventDefault();
    let loginInputId = nanoid();
    this.state.contacts.push({
      name: this.state.name,
      number: this.state.number,
      id: loginInputId,
    });
    console.log(this.state.contacts);
    console.log(this.state.contacts[0]);
    this.setState({ name: '', number: '' });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.includes(filter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={this.state.number}
              onChange={this.handleChangeNumber}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
