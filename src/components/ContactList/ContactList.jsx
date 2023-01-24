import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { removeContacts } from '../../redux/contacts/slice';
// import { getContacts, getFilter } from '../../redux/contacts/selectors';
import {
  ContactsList,
  ContactsListItem,
  ContactsListInf,
  ContactsListButton,
} from './ContactList.styled';
import { IoTrashBinOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { MdContactPage } from 'react-icons/md';

const ContactList = () => {
  const dispatch = useDispatch();
  //   const contacts = useSelector(getContacts);
  //   const filter = useSelector(getFilter);

  //   const filterContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  return (
    <ContactsList>
      {/* {filterContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <IconContext.Provider value={{ color: '#d85841' }}>
            <MdContactPage />
          </IconContext.Provider>
          <ContactsListInf>
            <b>{name}: </b>
            {number}
          </ContactsListInf>
          <ContactsListButton
            type="submit"
            name={name}
            onClick={() => dispatch(removeContacts(id))}
          >
            <IoTrashBinOutline />
          </ContactsListButton>
        </ContactsListItem>
      ))} */}
    </ContactsList>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
