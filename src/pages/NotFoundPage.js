import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../assets/notFound.webp';
import useLocale from '../hooks/useLocale';
function NotFoundPage() {
  const navigate = useNavigate();
  const [locale] = useLocale();
  return (
    <div className=' py-8 bg-slate-700 h-screen mt-[-74px] text-slate-100 flex flex-col justify-center items-center gap-7'>
      <img className='w-3/4 max-w-xl' src={notFound} alt='notfound' />
      <h1 className='text-slate-100 font-bold text-lg sm:text-2xl'>
        {locale === 'en'
          ? 'Sory, Your destination page is not found'
          : 'Maaf, halaman yang anda tuju tidak ditemukan'}
      </h1>
      <button
        onClick={() => navigate('/')}
        className='bg-yellow-600 cursor-pointer hover:ring-yellow-600 hover:ring-2 hover:bg-transparent text-white px-4 py-2 rounded-lg '
      >
        {locale === 'en' ? 'Back to home' : 'Kembali ke Home'}
      </button>
    </div>
  );
}

export default NotFoundPage;
