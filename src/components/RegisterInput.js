import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';
import swal from 'sweetalert';

function RegisterInput() {
  const navigate = useNavigate();
  const [theme] = useTheme();
  const [locale] = useLocale();
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [confirmPassword, setConfirmPassword] = useInput('');

  const onRegisterHandler = async () => {
    const response = await register({ name, email, password });
    if (response.error === false) {
      navigate('/login');
      swal(
        locale === 'en'
          ? 'Account registration successful!'
          : 'Pendaftaran akun berhasil!'
      );
    }
  };

  return (
    <div
      className={
        (theme === 'light'
          ? 'bg-white text-slate-900'
          : 'bg-slate-600 text-slate-200') +
        ' w-3/4 h-fit max-w-lg p-4 gap-3 rounded-lg flex flex-col justify-start items-center shadow-md'
      }
    >
      <div className=' flex justify-center flex-col items-center'>
        <h1 className='text-center font-bold text-2xl '>
          {locale === 'en' ? 'Register' : 'Daftar'}
        </h1>
        <p>{locale === 'en' ? 'Create new account' : 'Buat akun baru'}</p>
      </div>
      <div className='w-full bg-slate-200 h-[2px] rounded-md'></div>
      <div className='w-4/5 flex flex-col gap-6 justify-center'>
        <div className='flex flex-col gap-1 justify-center'>
          <label htmlFor='name' className='font-semibold'>
            {locale === 'en' ? 'Name' : 'Nama'}
          </label>
          <input
            className={
              (theme === 'light' ? '' : 'bg-slate-500 text-slate-200 ') +
              ' border border-slate-400 py-2 px-4 rounded-md'
            }
            type='text'
            id='name'
            value={name}
            placeholder={
              locale === 'en' ? 'Enter your name' : 'Masukkan Namamu'
            }
            onChange={setName}
          />
        </div>
        <div className='flex flex-col gap-1 justify-center'>
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
        <div className='flex flex-col gap-1 justify-center'>
          <label htmlFor='password' className='font-semibold'>
            {locale === 'en' ? 'Password' : 'Kata Sandi'}
          </label>
          <input
            className={
              (theme === 'light' ? '' : 'bg-slate-500 text-slate-200') +
              ` border border-slate-400 py-2 px-4 rounded-md `
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
        <div className='flex flex-col gap-1 justify-center'>
          <label htmlFor='confirmPassword' className='font-semibold'>
            {locale === 'en' ? 'Confirm Password' : 'Konfirmasi Kata Sandi'}
          </label>
          <input
            className={
              (theme === 'light' ? '' : 'bg-slate-500 text-slate-200') +
              ` border border-slate-400 py-2 px-4 rounded-md `
            }
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            placeholder={
              locale === 'en'
                ? 'Retype your password'
                : 'Ketikkan ulang password anda'
            }
            onChange={setConfirmPassword}
          />
        </div>
        <div className='flex flex-col gap-2 justify-center'>
          <p className='text-sm '>
            {locale === 'en' ? (
              <span>
                Already have account?{' '}
                <span className='underline'>
                  <Link to='/login'>Login here</Link>
                </span>{' '}
              </span>
            ) : (
              <span>
                Sudah punya akun?{' '}
                <span className='underline'>
                  <Link to='/login'>Masuk di sini</Link>
                </span>
              </span>
            )}
          </p>
          <button
            onClick={onRegisterHandler}
            className=' text-slate-100 bg-teal-700 px-3 py-2 rounded-md hover:bg-teal-800 '
          >
            {locale === 'en' ? 'Register' : 'Daftar'}
          </button>
        </div>
      </div>
    </div>
  );
}

RegisterInput.propTypes = {};

export default RegisterInput;
