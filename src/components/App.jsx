import ContactForm from './PhoneBook/ContactForm';
import Filter from './PhoneBook/Filter';
import ContactList from './PhoneBook/ContactList';
import s from '../components/PhoneBook/PhoneBook.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
