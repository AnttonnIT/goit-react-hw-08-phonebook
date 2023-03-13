// import { NavLink } from 'react-router-dom';
import { StyledLink } from './Navigation.styled';

export function Navigation() {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="/contacts">contacts</StyledLink>
    </nav>
  );
}
