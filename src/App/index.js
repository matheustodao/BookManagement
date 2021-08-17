import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ThemeProvider, { ThemeContext } from '../contexts/ThemeContext';

import Layout from './components/layout';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <BrowserRouter>
            <StyledThemeProvider theme={theme}>

              <Layout />

            </StyledThemeProvider>
          </BrowserRouter>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
