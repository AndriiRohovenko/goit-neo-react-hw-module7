import { useEffect } from 'react';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContactsThunk,
  deleteContactThunk,
} from '../../redux/operations/contactsOps';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

function ContactList() {
  const contactsData = useSelector(selectContacts);
  const filterData = useSelector(selectNameFilter);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const foundContacts = () => {
    return contactsData.filter(item =>
      item.name.toLowerCase().includes(filterData)
    );
  };

  const contacts = foundContacts();

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
          {contacts.map(contact => (
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
