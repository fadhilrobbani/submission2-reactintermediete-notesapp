import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const [theme] = useTheme();

  return (
    <div
      className={
        (theme === 'light'
          ? 'bg-slate-100 text-slate-900 '
          : 'bg-slate-700 text-slate-200') +
        ' h-screen mt-[-40px] pb-0 flex justify-center items-center'
      }
    >
      <RegisterInput />
    </div>
  );
}

RegisterPage.propTypes = {};

export default RegisterPage;
