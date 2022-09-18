import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiCheck } from 'react-icons/bi';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';

function ActionButtons({
  note,
  onClickArchiveHandler,
  onClickUnarchiveHandler,
  onClickDeleteHandler,
  onCancelHandler,
  onClickSubmitHandler,
}) {
  return (
    <div className='z-[100] fixed bottom-5 flex flex-row-reverse gap-6 p-3 rounded-2xl'>
      {window.location.pathname.includes('/notes/new') ? (
        <>
          <div
            className='cursor-pointer rounded-full p-2 bottom-8 right-10  hover:scale-105 transition duration-150 text-slate-100 bg-teal-600'
            onClick={onClickSubmitHandler}
          >
            <BiCheck className='action-buttons ' />
          </div>
          <div
            onClick={onCancelHandler}
            className='cursor-pointer rounded-full p-2 bottom-8 right-36  hover:scale-105 transition duration-150 text-slate-100 bg-amber-600'
          >
            <IoMdArrowBack className='action-buttons' />
          </div>
        </>
      ) : (
        <>
          {note.archived ? (
            <div
              onClick={onClickUnarchiveHandler}
              className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 bg-purple-300'
            >
              <MdOutlineUnarchive className='action-buttons' />
            </div>
          ) : (
            <div
              onClick={onClickArchiveHandler}
              className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 text-slate-100 bg-teal-600'
            >
              <MdOutlineArchive className='action-buttons' />
            </div>
          )}
          <div
            onClick={onClickDeleteHandler}
            className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 text-slate-100 bg-pink-600'
          >
            <BiTrash className='action-buttons' />
          </div>
          <div
            onClick={onCancelHandler}
            className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 text-slate-100 bg-amber-600'
          >
            <IoMdArrowBack className='action-buttons' />
          </div>
        </>
      )}
    </div>
  );
}

ActionButtons.propTypes = {
  note: PropTypes.object,
  onClickArchiveHandler: PropTypes.func,
  onClickUnarchiveHandler: PropTypes.func,
  onClickDeleteHandler: PropTypes.func,
  onCancelHandler: PropTypes.func.isRequired,
  onClickSubmitHandler: PropTypes.func,
};

export default ActionButtons;
