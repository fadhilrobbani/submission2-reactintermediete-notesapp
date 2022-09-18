import React, { useState, useEffect } from 'react';
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/network-data';
import useTheme from '../hooks/useTheme';
function ArchiveNotesPage() {
  const [theme] = useTheme();
  const [archivedNotes, setArchivedNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const notes = await getArchivedNotes();
      setArchivedNotes(notes.data);
    };
    getNotes();
  }, []);

  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' h-screen mt-[-25px] pt-10 '
      }
    >
      <NotesList notes={archivedNotes} />
    </div>
  );
}

ArchiveNotesPage.propTypes = {};

export default ArchiveNotesPage;
