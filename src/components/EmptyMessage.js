import React from 'react';
import useLocale from '../hooks/useLocale';

function EmptyMessage() {
  const [locale] = useLocale();
  if (window.location.pathname.includes('/archives')) {
    return (
      <h1 className=' absolute w-full   text-2xl mt-[60px] font-semibold text-slate-300 text-center  flex justify-center rounded-lg h-[400px] items-center  '>
        {locale === 'en'
          ? 'No archives record'
          : 'Tidak ada catatan yang diarsipkan'}
      </h1>
    );
  } else {
    return (
      <h1 className='  text-2xl font-semibold text-slate-300 text-center  flex justify-center rounded-lg h-[400px] items-center w-full p-4'>
        {locale === 'en' ? 'No notes' : 'Tidak ada Catatan'}
      </h1>
    );
  }
}

export default EmptyMessage;
