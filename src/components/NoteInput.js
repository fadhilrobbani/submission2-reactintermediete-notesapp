import React from 'react';
import useInput from '../hooks/useInput';
import useTheme from '../hooks/useTheme';
import useLocale from '../hooks/useLocale';
import ActionButtons from './ActionButtons';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
function NoteInput() {
  const navigate = useNavigate();
  const [theme] = useTheme();
  const [locale] = useLocale();
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');

  const onClickSubmitHandler = async () => {
    const response = await addNote({ title, body });
    if (response.error) return;
    navigate('/');
  };
  return (
    <>
      <div className='w-3/4 flex justify-center flex-col '>
        <input
          className={
            (theme === 'light'
              ? 'bg-slate-300 text-slate-900 placeholder:text-slate-500'
              : 'bg-slate-600 text-slate-200 placeholder:text-slate-300') +
            '  h-28 text-3xl font-bold p-5  placeholder:text-3xl rounded-t-lg focus:outline-none '
          }
          type='text'
          onChange={handleTitleChange}
          value={title}
          placeholder={locale === 'en' ? 'New Note' : 'Catatan Baru'}
        />
        <textarea
          className={
            (theme === 'light'
              ? 'bg-white-text-slate-900'
              : 'bg-slate-500 text-slate-200 placeholder:text-slate-300') +
            ' overflow-auto text-xl h-80 p-5 rounded-b-lg  placeholder: focus:outline-none'
          }
          value={body}
          onChange={handleBodyChange}
          placeholder={
            locale === 'en'
              ? 'Type your note here...'
              : 'Tulis catatan anda di sini...'
          }
        />
      </div>
      <ActionButtons
        onClickSubmitHandler={onClickSubmitHandler}
        onCancelHandler={() => navigate('/')}
      />
    </>
  );
}

export default NoteInput;
