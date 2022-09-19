import React, { useState, useEffect } from 'react';
import NoteItemDetail from '../components/NoteItemDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import useTheme from '../hooks/useTheme';
import LoadingSkeleton from '../components/LoadingSkeleton';

function NoteDetailPage() {
  const navigate = useNavigate();
  const [theme] = useTheme();
  const [initializing, setInitializing] = useState(true);
  const [note, setNote] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSingleNote = async () => {
      const response = await getNote(id);
      if (response.error) {
        navigate(`/${id}`);
        return;
      }
      setInitializing(false);
      setNote(response.data);
    };
    getSingleNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing || !note) {
    return <LoadingSkeleton />;
  }

  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' w-full flex py-5 justify-center items-center h-screen mt-[-74px]'
      }
    >
      <NoteItemDetail note={note} id={id} />
    </div>
  );
}

export default NoteDetailPage;
