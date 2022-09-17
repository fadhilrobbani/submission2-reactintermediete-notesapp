import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';
import useInput from '../hooks/useInput';

function LoginPage() {
  const [theme] = useTheme();
  const [locale] = useLocale();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  return (
    <div className='bg-slate-100 h-[88.5vh] flex justify-center items-center'>
      <div className='w-3/4 h-3/4 max-w-lg bg-white p-4 gap-5 rounded-lg flex flex-col justify-start items-center shadow-md'>
        <div className='text-slate-600 flex justify-center flex-col items-center'>
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
        <div className='w-4/5 flex flex-col gap-3 justify-center'>
          <div className='flex flex-col gap-2 justify-center'>
            <label htmlFor='email' className='font-semibold text-slate-600'>
              Email
            </label>
            <input
              className='border border-slate-400 py-2 px-4 rounded-md'
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
            <label htmlFor='password' className='font-semibold text-slate-600'>
              {locale === 'en' ? 'Password' : 'Kata Sandi'}
            </label>
            <input
              className='border border-slate-400 py-2 px-4 rounded-md'
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
          <button>{locale === 'en'}</button>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
