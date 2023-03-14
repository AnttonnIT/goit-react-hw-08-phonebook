import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;
