import { StyledContList } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/filterSlice';
import { useGetContactsQuery } from 'redux/contacts/createApi';
// import { useDispatch } from 'react-redux';
// import * as contactsOperation from 'redux/contacts/contactsOperation';
// import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { ContactItem } from 'components/Contacts/components/ContactItem/ContactItem';
import { useMemo } from 'react';

export const Contacts = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);
  // useEffect(() => {
  //   dispatch(contactsOperation.getContacts());
  // }, [dispatch]);

  const filter = useSelector(getFilter);
  const { data: contacts = [] } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
  }, [contacts, filter]);

  const shownContacts = filter !== '' ? filteredContacts : contacts;

  return (
    <StyledContList>
      {shownContacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </StyledContList>
  );
};

Contacts.prototype = {
  filteredContacts: PropTypes.array,
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
