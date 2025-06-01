import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import styles from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/operations/contactsOps';

function ContactForm() {
  const defaultObj = { name: '', number: '' };
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()

      .min(3, 'Min 3 symbols')
      .max(50, 'Max 50 symbols')
      .required('The field is required'),

    number: Yup.string()

      .min(3, 'Min 3 numbers')
      .max(50, 'Max 50 numbers')
      .required('The field is required'),
  });

  const handleAddContact = (contact, { resetForm }) => {
    dispatch(addContactThunk(contact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={defaultObj}
        onSubmit={handleAddContact}
        validationSchema={validationSchema}
      >
        <Form className={styles.formWrapper}>
          <div className={styles.fieldWrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor={phoneFieldId}>Number</label>
            <Field name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="span"
            />
          </div>
          <button className={styles.addContactBtn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
