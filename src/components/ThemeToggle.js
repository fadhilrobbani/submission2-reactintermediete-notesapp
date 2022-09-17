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
            theme === 'dark' ? 'swap-on  text-[40px]' : 'swap-off text-[40px]'
          }
        />
        <MdOutlineDarkMode
          className={
            theme === 'light' ? 'swap-on  text-[40px] text-slate-200' : 'swap-off text-[40px] text-slate-200'
          }
        />
      </label>
    </div>
  );
}

export default ThemeToggle;
