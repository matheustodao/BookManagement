import styled from 'styled-components';

export const ButtonAnchor = styled.a`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.size.small};
  padding: ${({ padding }) => (!padding ? '1.2rem' : padding)};
  text-transform: uppercase;

  & svg {
    margin-right: ${({ theme }) => theme.spacing.small};
  }

  transition: all .25s ease;
  &:hover {
    cursor: pointer;
    filter: brightness(.8);

  }

  &:active {
    transition: ease-out;
    filter: brightness(1);
  }
`;
