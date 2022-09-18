import React, { useState, useEffect } from 'react';
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/network-data';
import useTheme from '../hooks/useTheme';
import LoadingSkeleton from '../components/LoadingSkeleton';

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
    console.log('render');
    return <LoadingSkeleton />;
  }

  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' h-fit min-h-screen mt-[-25px] pt-10 pb-5 '
      }
    >
      <NotesList notes={archivedNotes} />
    </div>
  );
}

ArchiveNotesPage.propTypes = {};

export default ArchiveNotesPage;
