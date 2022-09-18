import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import parse from 'html-react-parser';
import useTheme from '../hooks/useTheme';

function NoteItem({ id, title, body, createdAt }) {
  const [theme] = useTheme();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/notes/${id}`)}
      className={
        (theme === 'light'
          ? 'bg-white text-slate-900'
          : 'bg-slate-500 text-slate-200') +
        ' flex group flex-col gap-2 rounded-lg shadow-lg cursor-pointer  hover:scale-105  transition duration-200  h-[300px] '
      }
    >
      <div
        className={
          (theme === 'light' ? 'bg-slate-300' : 'bg-slate-600') +
          ' w-full rounded-t-lg p-3 '
        }
      >
        <h1 className='text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>
          {title}
        </h1>
        <p
          className={
            (theme === 'light' ? ' text-slate-900' : 'text-slate-200') +
            ' font-semibold'
          }
        >
          {showFormattedDate(createdAt)}
        </p>
      </div>
      <div className='p-3 overflow-hidden h-full '>
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
