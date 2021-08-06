import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('theme')) || 'defaultMode';
    } catch (error) {
      return 'defaultMode';
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  function handleSelectTheme(mode) {
    setTheme(() => (
      mode === 'default'
        ? 'defaultMode'
        : mode
    ));
  }

  const currentTheme = themes[theme] || themes.defaultMode;

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        selectedTheme: theme,
        onSelectTheme: handleSelectTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
