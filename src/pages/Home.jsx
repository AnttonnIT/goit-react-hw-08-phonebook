import { Container } from 'components/App.styled';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <h1>Welcom to your Phonebook app</h1>
      {!isLoggedIn && (
        <>
          <p>Please </p>
          <Link to="/register">register</Link>
          <p>or</p>
          <Link to="/login">login</Link>
        </>
      )}
    </Container>
  );
}
