import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../assets/notFound.webp';
import useLocale from '../hooks/useLocale';
import useTheme from '../hooks/useTheme';
function NotFoundPage() {
  const navigate = useNavigate();
  const [locale] = useLocale();
  const [theme] = useTheme();
  return (
    <div
      className={
        (theme === 'light'
          ? 'bg-slate-100 text-slate-900'
          : 'bg-slate-700 text-slate-200') +
        ' py-8 h-screen mt-[-74px] flex flex-col justify-center items-center gap-7'
      }
    >
      <img className='w-3/4 max-w-xl' src={notFound} alt='notfound' />
      <h1 className='font-bold text-lg sm:text-2xl'>
        {locale === 'en'
          ? 'Sory, Your destination page is not found'
          : 'Maaf, halaman yang anda tuju tidak ditemukan'}
      </h1>
      <button
        onClick={() => navigate('/')}
        className='bg-yellow-600 cursor-pointer text-slate-100 hover:bg-yellow-800  px-4 py-2 rounded-lg '
      >
        {locale === 'en' ? 'Back to home' : 'Kembali ke Home'}
      </button>
    </div>
  );
}

export default NotFoundPage;
