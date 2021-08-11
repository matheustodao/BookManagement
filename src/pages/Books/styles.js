import styled, { css } from 'styled-components';

export const Container = styled.section`
  margin-top: 8rem;
  width: 100%;

  & .titleSection {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text.active};
    margin-bottom: 4.8rem;

    svg {
      cursor: pointer;
    }

    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.055em;
      font-size: 3.6rem;
      margin-left: ${({ theme }) => theme.spacing.small};
    }

  }
`;

export const WrapperBookCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media only screen and (max-width: 1295px) {
    & {
      justify-content: center;
    }
  }

  @media only screen and (min-width: 1500px) {
    & {
      justify-content: center;
    }
  }
`;

export const BookCard = styled.article`
  display: flex;
  align-items: center;
  max-width: 45.9rem;
  min-height: 16.8rem;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.medium};
  transition: all .25s ease-in;

  & .containerImage {
    max-width: 8rem;
    max-height: 12rem;

    img {
      text-align: center;
      width: 100%;
      height: 100%;
    }
  }

  &:hover  {
    cursor: pointer;
    transform: scale(1.05);
  }


  ${({ theme }) => css`
    background: ${theme.colors.background.bookCard};
    border-radius: ${theme.borderRadius.primary};
    box-shadow: ${theme.shadow.main};
    /* border: .1rem solid ${theme.colors.primary}; */
     & .containerImage {
       img {
        border-radius: ${theme.borderRadius.secondary};
        color: ${theme.colors.text.dark};
       }
     }
  `}
`;

export const InfoBook = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;

  justify-content: space-between;
  height: 10rem;
  margin-left: 1.6rem;

  span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.size.small};
    color: ${({ theme }) => theme.colors.text.darkSecondary};
    text-transform: capitalize;
  }

  h3 {
    font-weight: 700;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkPrimary};
    text-transform: uppercase;
    overflow: hidden;
    max-height: 5rem;
  }



`;
