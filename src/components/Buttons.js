import styled from 'styled-components';

export const ButtonAnchor = styled.a`
  display: flex;
  align-items: center;
  background: ${({ theme }) => (
    theme !== 'dark'
      ? theme.colors.secondary
      : theme.colors.primary
  )};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.colors.text.lightSecondary};
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  padding: 1.6rem 2.4rem;
  text-transform: uppercase;
  height: 100%;

  & svg {
    margin-right: .8rem;
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
