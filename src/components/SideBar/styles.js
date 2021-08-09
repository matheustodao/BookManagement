import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 7.2rem;
  padding-left: ${({ theme }) => theme.spacing.large};
  width: 30rem;
  font-size: ${({ theme }) => theme.size.medium};
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 6rem;
  border-radius:
    ${({ theme }) => theme.borderRadius.primary}
    0 0
    ${({ theme }) => theme.borderRadius.primary};
  padding-left: ${({ theme }) => theme.spacing.medium};
  background: ${({ active, theme }) => (active && theme.colors.background.main)};
  box-shadow: ${({ active, theme }) => (active && theme.shadow.main)};

  a {
    color: ${({ active, theme }) => (active ? theme.colors.text.active : theme.colors.details)};
  }

  transition: all .35s ease-in;
`;

export const Go = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Poppins', sans-serif;
  height: 100%;
  width: 100%;
  cursor: pointer;


  .icon {
    width: 24px;
    height: 24px;
    margin-right: ${({ theme }) => theme.spacing.medium};
  }

`;
