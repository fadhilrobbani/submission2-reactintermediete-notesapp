import React, { createContext, useState, useEffect } from 'react';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

const LocaleContext = createContext();
function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const setEn = () => setLocale('en');
  const setId = () => setLocale('id');

  const localeContextValue = useMemo(() => {
    return [locale, setEn, setId];
  }, [locale]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
    localStorage.setItem('lang', locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={localeContextValue}>
      {children}
    </LocaleContext.Provider>
  );
}
LocaleProvider.propTypes = {
  children:PropTypes.node.isRequired,
};
export { LocaleContext, LocaleProvider };
