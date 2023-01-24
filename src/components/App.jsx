import { Box } from './Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box fontSize={16} pt="60px" as="section">
        <h1
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '28px',
            color: '#1C4931',
          }}
        >
          Phonebook
        </h1>
        <ContactForm />
      </Box>
      <Box fontSize={16} pt="30px" as="section">
        <h2
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '28px',
            color: '#1C4931',
          }}
        >
          Contacts
        </h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Box>
    </>
  );
};
