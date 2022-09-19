import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { useSearchParams } from 'react-router-dom';
import EmptyMessage from './EmptyMessage';

function NotesList({ notes }) {
  const searchParam = useSearchParams();

  const filteredNotes = notes.filter((note) =>
    note.title
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(searchParam[0].get('title') || '')
  );

  useEffect(() => {
    const isLoaded = async () => {
      await notes;
    };
    isLoaded();
  }, [notes]);

  return (
    <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6'>
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
          />
        ))
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
