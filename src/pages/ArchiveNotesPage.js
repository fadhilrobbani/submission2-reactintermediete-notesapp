import React, { useState, useEffect } from 'react';
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/network-data';
import useTheme from '../hooks/useTheme';
import LoadingSkeleton from '../components/LoadingSkeleton';
import FloatingButtons from '../components/FloatingButtons';
import useLocale from '../hooks/useLocale';

function ArchiveNotesPage() {
  const [theme] = useTheme();
  const [locale] = useLocale();
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
      <p className=' text-xl font-semibold m-6  text-slate-100 text-center w-auto rounded-lg  bg-amber-600 opacity-90 p-4'>
        {locale === 'en' ? 'Archive Notes' : 'Catatan yang Diarsipkan'}
      </p>
      <NotesList notes={archivedNotes} />
    </div>
  );
}

export default ArchiveNotesPage;
