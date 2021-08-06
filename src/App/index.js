import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ThemeProvider, { ThemeContext } from '../contexts/ThemeContext';

import Routes from '../routes';
import GlobalStyle from '../styles/global';
import SideBar from '../components/SideBar';

import { ContainerRoutes } from './styles.';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <BrowserRouter>
            <StyledThemeProvider theme={theme}>
              <GlobalStyle />
              <SideBar />
              <ContainerRoutes>
                <Routes />
              </ContainerRoutes>
            </StyledThemeProvider>
          </BrowserRouter>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
