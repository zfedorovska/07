import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import {
  getVisibleContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import React from 'react';
import s from './PhoneBook.module.css';
import Spinner from './Spinner';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector(getLoading);
  const onDelete = id => {
    dispatch(deleteContact(id));
    dispatch(fetchContacts());
  };

  return (
    <div>
      <ul className={s.contactList}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={s.contactItem}>
              {name}: {phone}{' '}
              <button className={s.removeButton} onClick={() => onDelete(id)}>
                Remove
              </button>
            </p>
          </li>
        ))}
      </ul>
      {loading && <Spinner />}
    </div>
  );
}
