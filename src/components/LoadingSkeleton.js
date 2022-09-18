import React from 'react';
import useLocale from '../hooks/useLocale';
import useTheme from '../hooks/useTheme';
import { CgSpinner } from 'react-icons/cg';

function LoadingSkeleton() {
  const [theme] = useTheme();
  const [locale] = useLocale();
  return (
    <div
      className={
        (theme === 'light' ? 'bg-slate-100' : 'bg-slate-700') +
        ' h-screen mt-[-74px] pt-[74px] w-full flex justify-center items-center'
      }
    >
      <div
        className={
          (theme === 'light' ? 'text-slate-900' : 'text-slate-200') +
          ' font-bold text-2xl '
        }
      >
        <CgSpinner className='animate-spin mx-auto' size={60} />
        {locale === 'en' ? 'Loading...' : 'Memuat...'}
      </div>
    </div>
  );
}

export default LoadingSkeleton;
