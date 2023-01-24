import { useState } from 'react';
// import Notiflix from 'notiflix';
// import {
//   useSelector,
//   useDispatch,
// } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { addContacts } from '../../redux/contacts/slice';
// import { getContacts } from '../../redux/contacts/selectors';
import {
  ContactsForm,
  ContactsLabel,
  ContactsInput,
  ContactsButton,
  ErrorMessages,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //   const contacts = useSelector(getContacts);
  //   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    // contacts.some(contact => contact.name === name)
    //   ? Notiflix.Notify.failure(`${name} is already in contacts`)
    //   : dispatch(
    //       addContacts({
    //         id: nanoid(4),
    //         name,
    //         number,
    //       })
    //     );

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <ContactsLabel>
        Name
        <ContactsInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
        <ErrorMessages component="div" name="name" />
      </ContactsLabel>
      <ContactsLabel>
        Number
        <ContactsInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
        <ErrorMessages component="div" name="number" />
      </ContactsLabel>
      <ContactsButton type="submit">Add contact</ContactsButton>
    </ContactsForm>
  );
};

export default ContactForm;
