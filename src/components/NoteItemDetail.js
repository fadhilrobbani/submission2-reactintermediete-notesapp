import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';
import { useNavigate, useParams } from 'react-router-dom';
import ActionButtons from './ActionButtons';
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from '../utils/network-data';

function NoteItemDetail() {
  const [theme] = useTheme();
  const [note, setNote] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const onCancelHandler = () => {
    if (note.archived) {
      navigate('/archives');
    } else {
      navigate('/');
    }
  };

  const onClickArchiveHandler = async () => {
    await archiveNote(id);
    navigate('/');
  };

  const onClickUnarchiveHandler = async () => {
    await unarchiveNote(id);
    navigate('/archives');
  };
  const onClickDeleteHandler = async () => {
    await deleteNote(id);
    if (note.archived) {
      navigate('/archives');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const getSingleNote = async () => {
      const response = await getNote(id);
      if (response.error) {
        navigate(`/${id}`);
        return;
      }
      setNote(response.data);
    };
    getSingleNote();
  }, []);
  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' w-full flex py-5 justify-center items-center h-screen mt-[-74px]'
      }
    >
      <div className='w-3/4 flex justify-center flex-col '>
        <div className='bg-yellow-400 h-28 text-3xl font-bold p-5 placeholder:text-slate-500 placeholder:text-3xl focus:outline-none '>
          {note.title}
        </div>
        <div className='overflow-auto text-xl h-80  bg-yellow-200  p-5  placeholder:text-slate-500 placeholder: focus:outline-none'>
          {note.body}
        </div>
      </div>
      <ActionButtons
        note={note}
        onCancelHandler={onCancelHandler}
        onClickArchiveHandler={onClickArchiveHandler}
        onClickUnarchiveHandler={onClickUnarchiveHandler}
        onClickDeleteHandler={onClickDeleteHandler}
      />
    </div>
  );
}

NoteItemDetail.propTypes = {};

export default NoteItemDetail;
