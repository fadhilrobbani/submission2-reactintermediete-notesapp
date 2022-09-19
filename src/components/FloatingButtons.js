import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { MdOutlineArchive } from 'react-icons/md';

function FloatingButtons() {
  const navigate = useNavigate();

  if (window.location.pathname === '/') {
    return (
      <>
        <div
          onClick={() => navigate('/notes/new')}
          className='bg-teal-500 cursor-pointer shadow-md z-[100] fixed rounded-full p-2 bottom-5 right-5 hover:bg-teal-700 opacity-90'
        >
          <AiOutlinePlus className='text-slate-200' size={44} />
        </div>
        <div
          onClick={() => navigate('/archives')}
          className='bg-amber-600 text-slate-200 cursor-pointer shadow-md z-[100] fixed rounded-full p-2 bottom-24 right-5 opacity-90 hover:bg-amber-800'
        >
          <MdOutlineArchive size={44} />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        onClick={() => navigate('/')}
        className='bg-amber-600 text-slate-200 cursor-pointer shadow-md z-[100] fixed rounded-full p-2 bottom-5 right-5 opacity-90 hover:bg-amber-800'
      >
        <IoMdArrowBack size={44} />
      </div>
    </>
  );
}

export default FloatingButtons;
