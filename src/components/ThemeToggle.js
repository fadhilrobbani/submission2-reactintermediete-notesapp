import React from 'react';
import useTheme from '../hooks/useTheme';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function ThemeToggle() {
  const [theme, setLightMode, setDarkMode] = useTheme();

  const onThemeChangeHandler = () => {
    theme === 'light' ? setDarkMode() : setLightMode();
  };

  return (
    <div onClick={onThemeChangeHandler}>
      <label className='swap swap-rotate'>
        <MdOutlineLightMode
          className={
            theme === 'dark'
              ? 'swap-on  text-[45px] pt-[5px]'
              : 'swap-off text-[45px] pt-[5px]'
          }
        />
        <MdOutlineDarkMode
          className={
            theme === 'light'
              ? 'swap-on  text-[45px] text-slate-200 pt-[5px]'
              : 'swap-off pt-[5px] text-[45px] text-slate-200'
          }
        />
      </label>
    </div>
  );
}

export default ThemeToggle;
