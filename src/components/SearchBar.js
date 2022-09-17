import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';
import useInput from '../hooks/useInput';
import useLocale from '../hooks/useLocale';
import useTheme from '../hooks/useTheme';

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');

  const [keyword, handleKeywordChange] = useInput(title ? title : '');
  const [show, setShow] = useState(false);
  const [locale] = useLocale();
  const [theme] = useTheme();

  useEffect(() => {
    setSearchParams({ title: keyword });
    console.log(keyword);
  }, [keyword]);

  return (
    <>
      <div className='w-full flex justify-end'>
        <input
          className={
            show
              ? `text-slate-900 bg-slate-200 shadow-xl px-3 py-3 w-full md:w-1/2  absolute top-16 right-0`
              : `text-slate-900 px-3 py-2 w-full rounded-md hidden md:block`
          }
          type='text'
          value={keyword}
          onChange={handleKeywordChange}
          placeholder={locale === 'en' ? 'Search' : 'Cari'}
        />

        <div
          className={show ? `cursor-pointer` : `md:hidden cursor-pointer`}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <ImCross
              className={theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}
              size={30}
            />
          ) : (
            <FaSearch
              className={theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}
              size={30}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;