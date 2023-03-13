import { Container } from 'components/App.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container>
      <h1>Register Page</h1>
      <RegisterForm />
    </Container>
  );
}
