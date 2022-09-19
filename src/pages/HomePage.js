import React, { useState, useEffect } from 'react';
import NotesList from '../components/NotesList';
import { getActiveNotes } from '../utils/network-data';
import useTheme from '../hooks/useTheme';
import LoadingSkeleton from '../components/LoadingSkeleton';
import FloatingButtons from '../components/FloatingButtons';

function HomePage() {
  const [theme] = useTheme();
  const [activeNotes, setActiveNotes] = useState([]);
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    const getNotes = async () => {
      const notes = await getActiveNotes();
      setActiveNotes(notes.data);
      setInitializing(false);
    };
    getNotes();
  }, []);

  if (initializing || !activeNotes) {
    return <LoadingSkeleton />;
  }

  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        '  min-h-screen h-fit w-full pb-5 mt-[-74px] pt-[74px]  '
      }
    >
      <FloatingButtons />
      <NotesList notes={activeNotes} />
    </div>
  );
}

export default HomePage;
