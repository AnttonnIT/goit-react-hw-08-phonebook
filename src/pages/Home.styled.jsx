import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  min-width: 350px;
  padding: 30px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  width: 120px;
  color: #ffffff;

  text-align: center;
  padding: 10px 0;
  background-color: #2c3e50;

  transition: background-color 250ms linear, box-shadow 250ms linear;

  &:hover {
    background-color: #34495e;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }
`;
