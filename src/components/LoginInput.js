import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import useLocale from '../hooks/useLocale';
import useInput from '../hooks/useInput';
import useTheme from '../hooks/useTheme';
import { login } from '../utils/network-data';

function LoginInput({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [locale] = useLocale();
  const [theme] = useTheme();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const onLoginHandler = async () => {
    const response = await login({ email, password });
    if (response.error === false) {
      navigate('/');
      onLoginSuccess(response.data);
    }
  };

  return (
    <div
      className={
        (theme === 'light'
          ? 'bg-white text-slate-900'
          : 'bg-slate-600 text-slate-200') +
        ' w-3/4 h-fit max-w-lg p-4 gap-6 rounded-lg flex flex-col justify-start items-center shadow-md'
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
              locale === 'en' ? 'youremail@example.com' : 'emailkamu@contoh.com'
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
          <button
            onClick={onLoginHandler}
            className=' text-slate-100 bg-teal-700 px-3 py-2 rounded-md hover:bg-teal-800 '
          >
            {locale === 'en' ? 'Login' : 'Masuk'}
          </button>
        </div>
      </div>
    </div>
  );
}

LoginInput.propTypes = {
  onLoginSuccess: PropTypes.func,
};

export default LoginInput;
