import React from 'react';
import useLocale from '../hooks/useLocale';
import idLogo from '../assets/idLogo.png';
import usaLogo from '../assets/usaLogo.png';

function LocaleToggle() {
  const [locale, setEn, setId] = useLocale();

  const onLocaleChangeHandler = () => {
    locale === 'en' ? setId() : setEn();
  };

  return (
    <div onClick={onLocaleChangeHandler}>
      <div className='swap swap-rotate'>
        <div
          className={(locale === 'en' ? 'swap-on' : 'swap-off') + ' h-11 w-11'}
        >
          <img
            src={idLogo}
            alt={locale}
            className='h-full w-full aspect-square'
          />
        </div>
        <div
          className={(locale === 'id' ? 'swap-on' : 'swap-off') + ' h-11 w-11'}
        >
          <img
            src={usaLogo}
            alt={locale}
            className='h-full w-full aspect-square'
          />
        </div>
      </div>
    </div>
  );
}

export default LocaleToggle;
