import { BackDrop } from './Modal.styled';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/createApi';
import { MyForm } from 'components/Contacts/components/Form/Form';
import PropTypes from 'prop-types';

export const Modal = ({ id }) => {
  const [editContact, { isLoading }] = useEditContactMutation();
  const { data: contacts = [] } = useGetContactsQuery();
  const contact = contacts.find(c => c.id === id);

  isLoading && document.querySelector('body').classList.remove('fixed');
  return (
    <>
      <BackDrop>
        {contact && (
          <MyForm
            mutator={editContact}
            initialFormValues={{ name: contact.name, number: contact.number }}
            btn1="Edit Contact"
            btn2="Reload Data"
            id={contact.id}
            name="Edit Contact"
          />
        )}
      </BackDrop>
    </>
  );
};

MyForm.propTypes = {
  id: PropTypes.string,
};
