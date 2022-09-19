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

  const [keyword, handleKeywordChange] = useInput(title || '');
  const [show, setShow] = useState(false);
  const [locale] = useLocale();
  const [theme] = useTheme();

  useEffect(() => {
    const filteredKeyword = keyword.toLowerCase().replace(/\s+/g, '');
    setSearchParams({ title: filteredKeyword });
  }, [keyword]);

  return (
    <>
      <div className='w-fit xs:w-full flex justify-center xs:justify-end'>
        <input
          className={
            show
              ? (theme === 'light'
                  ? 'text-slate-900 bg-white'
                  : 'text-slate-200 bg-slate-500 placeholder:text-slate-300') +
                `  shadow-xl px-3 py-3 w-full md:w-1/2  absolute top-[73px] right-0`
              : (theme === 'light'
                  ? 'text-slate-900 bg-white'
                  : 'text-slate-200 bg-slate-500 placeholder:text-slate-300') +
                ` shadow-md px-3 py-2 w-full rounded-md hidden md:block`
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
