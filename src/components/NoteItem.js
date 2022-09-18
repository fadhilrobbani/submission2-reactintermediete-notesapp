import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import parse from 'html-react-parser';

function NoteItem({ id, title, body, createdAt }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/notes/${id}`)}
      className='flex group flex-col gap-2  bg-yellow-200 shadow-lg cursor-pointer  hover:scale-105  transition duration-200  h-[300px] '
    >
      <div className=' bg-yellow-400 w-full p-3'>
        <h1 className='text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>
          {title}
        </h1>
        <p className='font-semibold text-slate-800'>
          {showFormattedDate(createdAt)}
        </p>
      </div>
      <div className='overflow-hidden p-3 text-ellipsis h-full bg-transparent'>
        <p className=''>{parse(body)}</p>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
