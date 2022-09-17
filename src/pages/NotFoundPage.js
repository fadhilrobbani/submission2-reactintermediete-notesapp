import React from 'react'
import {useNavigate} from 'react-router-dom';
import notFound from '../assets/notFound.webp'
function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className=' py-8 text-slate-100 flex flex-col justify-center items-center gap-7'>
      <img className='w-3/4 max-w-xl' src={notFound} alt='notfound' />
      <h1 className='text-slate-100 font-bold text-lg sm:text-2xl'>Maaf, halaman tidak tersedia</h1>
      <button
        onClick={() => navigate('/')}
        className='bg-yellow-600 cursor-pointer hover:ring-yellow-600 hover:ring-2 hover:bg-transparent text-white px-4 py-2 rounded-lg '
      >
        Kembali ke home
      </button>
    </div>
  );
}

export default NotFoundPage