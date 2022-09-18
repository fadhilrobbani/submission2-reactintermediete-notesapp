import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';

function NoteInput() {
  const [theme] = useTheme();
  const [locale] = useLocale();
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');
  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' w-full flex py-5 justify-center items-center h-screen mt-[-74px]'
      }
    >
      <div className='w-3/4 flex justify-center flex-col '>
        <input
          className='bg-yellow-400 h-28 text-3xl font-bold p-5 placeholder:text-slate-500 placeholder:text-3xl focus:outline-none '
          type='text'
          onChange={handleTitleChange}
          value={title}
          placeholder={locale === 'en' ? 'New Note' : 'Catatan Baru'}
        />
        <textarea
          className='overflow-auto text-xl h-80  bg-yellow-200  p-5  placeholder:text-slate-500 placeholder: focus:outline-none'
          value={body}
          onChange={handleBodyChange}
          placeholder={
            locale === 'en'
              ? 'Type your note here...'
              : 'Tulis catatan anda di sini...'
          }
        />
      </div>
    </div>
  );
}

NoteInput.propTypes = {};

export default NoteInput;
