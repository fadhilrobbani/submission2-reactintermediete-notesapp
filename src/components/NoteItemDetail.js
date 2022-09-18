import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import ActionButtons from './ActionButtons';
import { archiveNote, deleteNote, unarchiveNote } from '../utils/network-data';

function NoteItemDetail({ note, id }) {
  const [theme] = useTheme();
  const navigate = useNavigate();

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

  return (
    <>
      <div className='w-3/4 flex justify-center flex-col '>
        <div
          className={
            (theme === 'light'
              ? 'bg-slate-300 text-slate-900'
              : 'bg-slate-600 text-slate-200') +
            ' h-28 text-3xl font-bold p-5 rounded-t-lg  placeholder:text-slate-500 placeholder:text-3xl focus:outline-none '
          }
        >
          {note.title}
        </div>
        <div
          className={
            (theme === 'light'
              ? 'bg-white text-slate-900'
              : 'bg-slate-500 text-slate-200') +
            ' overflow-auto text-xl h-80 p-5 rounded-b-lg shadow-lg placeholder:text-slate-500 placeholder: focus:outline-none'
          }
        >
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
    </>
  );
}

NoteItemDetail.propTypes = {
  note: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItemDetail;
