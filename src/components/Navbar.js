import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import LocaleToggle from './LocaleToggle';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';
import LogoutButton from './LogoutButton';
import { MdOutlineArchive } from 'react-icons/md';

function Navbar({ onLogoutHandler, name }) {
  const [theme] = useTheme();
  const [locale] = useLocale();
  const navigate = useNavigate();
  return (
    <header
      className={
        (theme === 'dark'
          ? ' bg-slate-700 text-slate-200'
          : ' text-slate-900 bg-slate-100') +
        ' z-[100] sticky top-0 flex justify-between items-center w-full py-3 px-6'
      }
    >
      <h1
        onClick={() => navigate('/')}
        className={
          (theme === 'dark' ? 'text-slate-200' : '') +
          ' font-bold  text-2xl uppercase cursor-pointer'
        }
      >
        {locale === 'en' ? 'MyNotes' : 'Catatanku'}
      </h1>
      <div className='flex gap-6 items-center justify-end w-full'>
        {window.location.pathname.includes('/notes/') ||
        window.location.pathname.includes('login') ||
        window.location.pathname.includes('register') ? null : (
          <div className='w-1/2 flex justify-e items-center'>
            <SearchBar />
          </div>
        )}
        <ThemeToggle />
        <LocaleToggle />
        <div onClick={() => navigate('/archives')} className='cursor-pointer'>
          <MdOutlineArchive
            className='hover:scale-105 transition duration-150'
            size={34}
          />
        </div>
        {name ? (
          <LogoutButton onLogoutHandler={onLogoutHandler} name={name} />
        ) : null}
      </div>
    </header>
  );
}

Navbar.propTypes = {
  onLogoutHandler: PropTypes.func,
  name: PropTypes.string,
};

export default Navbar;
