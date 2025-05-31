import styles from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

function Contact({ contactId, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteAction = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactData}>
          <div className={styles.fieldWrapper}>
            <IoPerson />
            <p>{name}</p>
          </div>
          <div className={styles.fieldWrapper}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <button className={styles.deleteBtn} onClick={handleDeleteAction}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Contact;
