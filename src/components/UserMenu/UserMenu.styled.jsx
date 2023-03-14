import styled from '@emotion/styled';
export const UserMenuContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  color: #ffffff;
  border: 1px solid black;

  padding: 3px 10px;
  background-color: #2c3e50;

  transition: background-color 250ms linear, box-shadow 250ms linear;
  :active {
    background-color: #5f5ffc;
  }
  &:hover,
  &:focus {
    background-color: #34495e;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: #5f5ffc;
  }
`;
