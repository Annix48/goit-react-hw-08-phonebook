import { useCreateContactMutation } from 'redux/contacts/createApi';
import { BackDrop } from 'components/Contacts/components/Modal/Modal.styled';
import { PhoneBookHeader, PhoneBookBox } from './NavBar.styled';
import { MyForm } from 'components/Contacts/components/Form/Form.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selector } from 'redux/contacts/modalSlice';
import PropTypes from 'prop-types';
// import { Button } from '@mui/material';
import { RiUserAddLine } from 'react-icons/ri';
import { StyledButton } from '../../../../GlobalStyles.styled';

export const NavBar = () => {
  const modalSelector = useSelector(state => state.modal.selector);
  const dispatch = useDispatch();
  const [addContact] = useCreateContactMutation();

  const addContactModal = e => {
    dispatch(selector('add'));
  };

  return (
    <PhoneBookBox>
      <PhoneBookHeader>Phonebook</PhoneBookHeader>
      {!modalSelector && (
        // <StyledButton onClick={addContactModal}>Add Contact</StyledButton>
        <StyledButton
          variant="contained"
          endIcon={<RiUserAddLine />}
          color="primary"
          onClick={addContactModal}
        >
          Add Contact
        </StyledButton>
      )}
      {modalSelector === 'add' && (
        <BackDrop>
          <MyForm
            mutator={addContact}
            initialFormValues={{ name: '', number: '' }}
            btn1="Add Contact"
            btn2="Clear Form"
            name="AddContact"
          />
        </BackDrop>
      )}
    </PhoneBookBox>
  );
};

MyForm.propTypes = {
  modalSelector: PropTypes.string,
};
