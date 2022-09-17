import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import LocaleToggle from './LocaleToggle';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';

function Navbar() {
  const [theme] = useTheme();
  const [locale] = useLocale();
  return (
    <header
      className={
        (theme === 'dark'
          ? ' bg-slate-700 text-slate-200'
          : ' text-slate-900 bg-slate-100') +
        ' z-[100] sticky top-0 flex justify-between items-center w-full py-3 px-6 bg-slate-100 text-slate-900'
      }
    >
      <h1
        className={
          (theme === 'dark' ? 'text-slate-200' : '') +
          ' font-bold  text-2xl uppercase'
        }
      >
        <Link to='/'>{locale === 'en' ? 'MyNotes' : 'Catatanku'}</Link>
      </h1>
      <div className='flex gap-6 items-center justify-end w-full'>
        {window.location.pathname.includes('/notes/') ? null : (
          <div className='w-1/2 flex justify-e items-center'>
            <SearchBar />
          </div>
        )}
        <ThemeToggle />
        <LocaleToggle />
      </div>
    </header>
  );
}

export default Navbar;
