import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.main};
  padding-top: 5.5rem;
  header {
    height: 5.4rem;
    margin-bottom: 8rem;

  }

  header div {
    width: 24.2rem;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.secondary};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.secondary};

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 4.8rem;

  }

`;

export const ButtonGoBack = styled(Link)`
  height: 100%;
  font-weight: 600;
  color: #fff;
  font-size: 1.8rem;
  text-transform: lowercase;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Poppins', sans-serif;


  & svg {
    margin-right: .8rem;
  }

  &:active {
    filter: brightness(.8);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image informationBook';
  align-content: center;
  margin-left: 4.5rem;
  margin-right: 9rem;
  height: 33.7rem;
  gap: 4.5rem;
`;

export const Image = styled.div`
  grid-area: image;
  width: 19rem;
  height: 31.1rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }
`;

export const InformationBook = styled.div`
  grid-area: informationBook;
  display: grid;
  grid-template-columns: 48.1rem 1fr;
  grid-template-rows: repeat(3, 11rem);
  grid-template-areas:
    'title synopsis'
    'genres synopsis'
    'bookSpine synopsis';
  grid-column-gap: 9rem;
  height: 100%;

`;

export const Title = styled.div`
  grid-area: title;
  display: flex;
  justify-content: center;
  flex-direction: column;

  small {
    color: ${({ theme }) => theme.colors.text.dark};
    font-size: 1.6rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Heading = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: .8rem;
`;

export const Genres = styled.div`
  grid-area: genres;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    flex-wrap: wrap;

  }

  button {
    cursor: default;
    padding: ${({ theme }) => theme.spacing.small};
    border: .1rem solid
      ${({ theme }) => (
    theme === 'dark' || theme === 'darkWhite'
      ? theme.colors.secondary
      : theme.colors.primary
  )};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    color: ${({ theme }) => theme.colors.text.darkSecondary};
    background: transparent;
    font-size: 1.2rem;
    width: auto;
    & + button {
      margin-left: .8rem;
    }
  }
`;

export const BookSpine = styled.div`
  grid-area: bookSpine;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    small {
      color: ${({ theme }) => theme.colors.text.dark};
      font-size: 1.6rem;
      font-weight: 400;
      font-family: 'Montserrat', sans-serif;
      margin-top: .8rem;

      a {
        margin-left: .8rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Synopsis = styled.div`
  grid-area: synopsis;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 44.4rem;
  padding-top: 4.8rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.text.darkSecondary};
    width: 44.4rem;
    max-height: 27rem;
    height: 100%;
    font-size: 1.6rem;
    line-height: 3.2rem;
    text-align: justify;

    white-space: pre-line;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis ellipsis;

  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    width: 100%;
    position: absolute;
    bottom: -7.5px;
    left: -2%;

    & svg {
      margin-left: .8rem;
    }

  }

`;
