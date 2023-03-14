import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  transition: color 250ms linear;
  &.active {
    color: red;
  }
  &:hover,
  &:focus {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;
