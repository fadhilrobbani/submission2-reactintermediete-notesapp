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
      <label className='swap swap-rotate'>
        <img
          src={idLogo}
          alt={locale}
          className={
            locale === 'en' ? 'swap-on  h-11 w-11' : 'swap-off h-11 w-11'
          }
        />
        <img
          src={usaLogo}
          alt={locale}
          className={
            locale === 'id' ? 'swap-on   h-11 w-11' : 'swap-off  h-11 w-11'
          }
        />
      </label>
    </div>
  );
}

export default LocaleToggle;
