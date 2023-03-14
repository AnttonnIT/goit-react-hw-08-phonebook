import { Container } from 'components/App.styled';
import { useAuth } from 'hooks/useAuth';
import { Box, StyledLink } from './Home.styled';

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <Container>
      <h1>Welcom to your Phonebook app</h1>

      <Box>
        {!isLoggedIn && (
          <>
            <h3>If you are here for the first time</h3>
            <StyledLink to="/register">register</StyledLink>
            <h3>or if you are already registered</h3>
            <StyledLink to="/login">login</StyledLink>
          </>
        )}

        {isLoggedIn && (
          <>
            <h3>{user.name}, your contacts are already waiting for you</h3>
            <StyledLink to="/contacts">contacts</StyledLink>
          </>
        )}
      </Box>
    </Container>
  );
}
