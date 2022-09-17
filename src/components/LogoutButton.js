import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useLocale from '../hooks/useLocale';
import useTheme from '../hooks/useTheme';

function LogoutButton({ onLogoutHandler, authedUser }) {
  const [theme] = useTheme();
  const [locale] = useLocale();
  return (
    <div className='dropdown dropdown-end '>
      <FaUserCircle tabIndex={0} className='text-[40px] cursor-pointer' />
      <ul
        tabIndex={0}
        className={
          (theme === 'light'
            ? 'bg-slate-100 text-slate-900'
            : 'bg-slate-700 text-slate-200') +
          ' menu dropdown-content shadow-md rounded-lg  w-52 mt-5'
        }
      >
        <li className='cursor-pointer px-3 py-1 font-bold text-sm text-center text-slate-200 bg-teal-700 '>
          {''}
        </li>
        <li
          className='cursor-pointer  p-3 text-center hover:bg-teal-600 hover:text-slate-200'
          onClick={onLogoutHandler}
        >
          {locale === 'en' ? 'Logout' : 'Keluar'}
        </li>
      </ul>
    </div>
  );
}

export default LogoutButton;
