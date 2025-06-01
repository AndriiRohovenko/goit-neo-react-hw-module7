import { useEffect } from 'react';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContactsThunk,
  deleteContactThunk,
} from '../../redux/operations/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice';

import { selectFilteredContacts } from '../../redux/contactsSlice';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDeleteAction = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <>
      <div>
        {isLoading && !error && (
          <p className={styles.message}>Request in progress...</p>
        )}

        {error && <p className={styles.error}>Error: {error}</p>}
        <ul className={styles.contactListWrapper}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact
                onDelete={() => handleDeleteAction(contact.id)}
                name={contact.name}
                number={contact.number}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ContactList;
