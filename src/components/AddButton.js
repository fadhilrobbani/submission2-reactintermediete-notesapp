import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function AddButton() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/notes/new')}
      className='bg-teal-500 cursor-pointer shadow-md z-[100] fixed rounded-full p-2 bottom-5 right-8 hover:bg-teal-700'
    >
      <AiOutlinePlus className='text-slate-200' size={50} />
    </div>
  );
}

export default AddButton;
