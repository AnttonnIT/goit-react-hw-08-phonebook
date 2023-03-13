import { StyledLink } from 'components/Navigation/Navigation.styled';
// import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
