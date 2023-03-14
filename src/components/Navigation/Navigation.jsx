import { useAuth } from 'hooks/useAuth';
import { Nav, StyledLink } from './Navigation.styled';

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
}
