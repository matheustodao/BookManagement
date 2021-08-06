import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 7.2rem;
  padding-left: ${({ theme }) => theme.spacing.large};
  width: 30rem;
  height: 100%;
  font-size: ${({ theme }) => theme.size.medium};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 6rem;
  border-radius: .8rem 0 0 .8rem;
  padding-left: 2.4rem;
  background: ${({ active, theme }) => (active && theme.colors.background)};
  box-shadow: ${({ active, theme }) => (active && theme.boxShadow)};

  a {
    color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.details)};
  }

  transition: all .25s ease-in;
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
    margin-right: 1.8rem;
  }

`;
