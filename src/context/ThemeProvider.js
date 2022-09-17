import React, { createContext, useState, useEffect } from 'react';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('data-theme') || 'light'
  );
  const setLightMode = () => setTheme('light');
  const setDarkMode = () => setTheme('dark');

  const themeContextValue = useMemo(() => {
    return [theme, setLightMode, setDarkMode];
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ThemeContext, ThemeProvider };
