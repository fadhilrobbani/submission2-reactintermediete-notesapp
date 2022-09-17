import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';
import useInput from '../hooks/useInput';

function LoginPage() {
  const [theme] = useTheme();
  const [locale] = useLocale();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  return (
    <div
      className={
        (theme === 'light'
          ? 'bg-slate-100 text-slate-900 '
          : 'bg-slate-700 text-slate-200') +
        ' h-[88.5vh] flex justify-center items-center'
      }
    >
      <div
        className={
          (theme === 'light'
            ? 'bg-white text-slate-900'
            : 'bg-slate-600 text-slate-200') +
          ' w-3/4 h-3/4 max-w-lg p-4 gap-6 rounded-lg flex flex-col justify-start items-center shadow-md'
        }
      >
        <div className=' flex justify-center flex-col items-center'>
          <h1 className='text-center font-bold text-2xl '>
            {locale === 'en' ? 'Login' : 'Masuk'}
          </h1>
          <p>
            {locale === 'en'
              ? 'Login to access your notes'
              : 'Masuk untuk dapat mengakses catatanmu'}
          </p>
        </div>
        <div className='w-full bg-slate-200 h-[2px] rounded-md'></div>
        <div className='w-4/5 flex flex-col gap-6 justify-center'>
          <div className='flex flex-col gap-2 justify-center'>
            <label htmlFor='email' className='font-semibold'>
              Email
            </label>
            <input
              className={
                (theme === 'light' ? '' : 'bg-slate-500 text-slate-200 ') +
                ' border border-slate-400 py-2 px-4 rounded-md'
              }
              type='text'
              id='email'
              value={email}
              placeholder={
                locale === 'en'
                  ? 'youremail@example.com'
                  : 'emailkamu@contoh.com'
              }
              onChange={setEmail}
            />
          </div>
          <div className='flex flex-col gap-2 justify-center'>
            <label htmlFor='password' className='font-semibold'>
              {locale === 'en' ? 'Password' : 'Kata Sandi'}
            </label>
            <input
              className={
                (theme === 'light' ? '' : 'bg-slate-500 text-slate-200') +
                ' border border-slate-400 py-2 px-4 rounded-md'
              }
              type='password'
              id='password'
              value={password}
              placeholder={
                locale === 'en'
                  ? 'Minimum 6 digit password'
                  : 'Minimal 6 digit kata sandi'
              }
              onChange={setPassword}
            />
          </div>
          <div className='flex flex-col gap-2 justify-center'>
            <p className='text-sm '>
              {locale === 'en' ? (
                <span>
                  Don't have account?{' '}
                  <span className='underline'>
                    <Link to='/register'>Register here</Link>
                  </span>{' '}
                </span>
              ) : (
                <span>
                  Tidak punya akun?{' '}
                  <span className='underline'>
                    <Link to='/register'>Daftar di sini</Link>
                  </span>
                </span>
              )}
            </p>
            <button className=' text-slate-100 bg-teal-700 px-3 py-2 rounded-md hover:bg-teal-800 '>
              {locale === 'en' ? 'Login' : 'Masuk'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
