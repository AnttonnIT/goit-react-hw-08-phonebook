import { Container } from 'components/App.styled';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <h1>Welcom to your Phonebook app</h1>
      <p>Please </p>
      <Link to="/register">register</Link>
      <p>or</p>
      <Link to="/login">login</Link>
    </Container>
  );
}
