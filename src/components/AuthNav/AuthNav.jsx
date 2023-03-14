import { StyledLink } from 'components/Navigation/Navigation.styled';
import { AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </AuthNavContainer>
  );
};
