import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/operations/contactsOps';

function ContactList() {
  const contactsData = useSelector(state => state.contacts.items);
  const filterData = useSelector(state => state.filters.filterByName.name);

  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.contacts.isLoading);
  // const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const foundContacts = () => {
    return contactsData.filter(item =>
      item.name.toLowerCase().includes(filterData)
    );
  };

  return (
    <>
      <ul className={styles.contactListWrapper}>
        {foundContacts().map(contact => (
          <li key={contact.id}>
            <Contact
              contactId={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
