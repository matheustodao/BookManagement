import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const SearchBox = styled.form`
  display: flex;
  background: ${({ theme }) => theme.colors.backgroundSearch};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  align-items: center;
  height: 100%;
  width: 63rem;
  box-shadow: ${({ theme }) => theme.shadow.main};


  button {
    border: none;
    width: 6rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.light};
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadow.main};

    border-radius:
      ${({ theme }) => theme.borderRadius.primary}
      0 0
      ${({ theme }) => theme.borderRadius.primary};

    transition: all .25s ease;
    &:hover {
      cursor: pointer;
      filter: brightness(.8);

    }

    &:active {
      transition: ease-out;
      filter: brightness(1);
    }
  }

  input {
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    color: ${({ theme }) => theme.colors.text.darkSecondary};
    border: .1rem solid ${({ theme }) => theme.colors.background.main};

    border-radius:
      0
      ${({ theme }) => theme.borderRadius.primary}
      ${({ theme }) => theme.borderRadius.primary}
      0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightSecondary};
    }
    &::-webkit-search-cancel-button {
      appearance: none;
    }

    transition: border .25s ease-in;

    &:focus {
      border: .1rem solid ${({ theme }) => theme.colors.primary};
    }
  }
`;
