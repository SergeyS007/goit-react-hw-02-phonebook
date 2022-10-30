import React from 'react';
import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contactsItem} key={id}>
        <p className={css.contactsName}>{name}</p>
        <p className={css.contactsName}>{number}</p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
