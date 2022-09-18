import React, { useState, useEffect } from 'react';
import NotesList from '../components/NotesList';
import { getActiveNotes } from '../utils/network-data';
import useTheme from '../hooks/useTheme';

function HomePage() {
  const [theme] = useTheme();
  const [activeNotes, setActiveNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const notes = await getActiveNotes();
      setActiveNotes(notes.data);
      console.log('render homepage');
    };
    getNotes();
  }, []);

  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' h-screen w-full mt-[-74px] pt-[74px]  '
      }
    >
      <NotesList notes={activeNotes} />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
