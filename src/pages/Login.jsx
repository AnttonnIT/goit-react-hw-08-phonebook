import { Container } from 'components/App.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container>
      <h1>LoginPage</h1>
      <LoginForm />
    </Container>
  );
}
