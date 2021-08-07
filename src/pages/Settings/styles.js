import styled from 'styled-components';

export const Container = styled.div``;

export const Mode = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  width: 15rem;
  height: 5rem;
  cursor: pointer;

  background: ${({ bg }) => (bg && bg)};
  color: ${({ color }) => (color && color)};

  & + & {
    margin-left: 5rem;
  }
`;
