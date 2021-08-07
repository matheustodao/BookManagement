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

  button {
    border: none;
    border-radius:
      ${({ theme }) => theme.borderRadius.primary}
      0 0
      ${({ theme }) => theme.borderRadius.primary};
    background: ${({ theme }) => theme.colors.secondary};
    width: 6rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F8F3FF;
    box-shadow: 0px .1rem .2rem rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  input {
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    color: ${({ theme }) => theme.colors.text.dark};
    &::-webkit-search-cancel-button {
      appearance: none;
    }
  }
`;
