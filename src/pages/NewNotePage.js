import React from 'react';
import NoteInput from '../components/NoteInput';
import useTheme from '../hooks/useTheme';

function NewNotePage() {
  const [theme] = useTheme();
  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' w-full flex py-5 justify-center items-center h-screen mt-[-74px]'
      }
    >
      <NoteInput />
    </div>
  );
}

export default NewNotePage;
