import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { useSearchParams } from 'react-router-dom';
import EmptyMessage from './EmptyMessage';

function NotesList({ notes }) {
  const [initializing, setInitializing] = useState(true);
  const searchParam = useSearchParams();

  const filteredNotes = notes.filter((note) =>
    note.title
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(searchParam[0].get('title') || '')
  );

  // useEffect(() => {
  //   const isLoaded = async () => {
  //     await notes;
  //     setInitializing(false);
  //     console.log('useeffect');
  //   };
  //   isLoaded();
  // }, []);

  // if (initializing) {
  //   console.log('render');
  //   return null;
  // }
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
      {}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
