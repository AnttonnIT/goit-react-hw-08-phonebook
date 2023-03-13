import { Container } from 'components/App.styled';
import { ContactList } from 'components/ContactList/ContactList ';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
// import { Toaster } from 'react-hot-toast';

export default function Contacts() {
  return (
    <Container>
      <h2>Phonebook</h2>

      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
