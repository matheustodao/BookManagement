import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
`;
