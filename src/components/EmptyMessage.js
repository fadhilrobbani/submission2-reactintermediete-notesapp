import React from 'react';

function EmptyMessage() {
  if (window.location.pathname.includes('/archives')) {
    return (
      <h1 className=' absolute  text-2xl font-semibold text-slate-300 text-center  flex justify-center rounded-lg h-[400px] items-center w-full p-4'>
        Tidak Ada Catatan yang Diarsipkan
      </h1>
    );
  } else {
    return (
      <h1 className=' absolute  text-2xl font-semibold text-slate-300 text-center  flex justify-center rounded-lg h-[400px] items-center w-full p-4'>
        Tidak Ada Catatan Aktif
      </h1>
    );
  }
}

export default EmptyMessage;
