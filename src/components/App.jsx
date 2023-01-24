import { Box } from './Box';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import Filter from './Filter';

export const App = () => {
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
        {/* <Filter /> */}
        <ContactList />
      </Box>
    </>
  );
};
