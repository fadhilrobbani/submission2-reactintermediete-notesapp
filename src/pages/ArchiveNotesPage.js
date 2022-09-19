import React, { useState, useEffect } from 'react';
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/network-data';
import useTheme from '../hooks/useTheme';
import LoadingSkeleton from '../components/LoadingSkeleton';
import FloatingButtons from '../components/FloatingButtons';

function ArchiveNotesPage() {
  const [theme] = useTheme();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    const getNotes = async () => {
      const notes = await getArchivedNotes();
      setArchivedNotes(notes.data);
      setInitializing(false);
    };
    getNotes();
  }, []);

  if (initializing || !archivedNotes) {
    return <LoadingSkeleton />;
  }

  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' h-fit min-h-screen mt-[-74px] pt-[74px] pb-5 '
      }
    >
      <FloatingButtons />
      <NotesList notes={archivedNotes} />
    </div>
  );
}

export default ArchiveNotesPage;
