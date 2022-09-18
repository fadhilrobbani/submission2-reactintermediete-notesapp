import React from 'react';
import PropTypes from 'prop-types';
import NoteInput from '../components/NoteInput';

function NewNotePage(props) {
  return (
    <div>
      <NoteInput />
    </div>
  );
}

NewNotePage.propTypes = {};

export default NewNotePage;
