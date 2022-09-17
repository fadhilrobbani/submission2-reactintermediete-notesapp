import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';
import LoginInput from '../components/LoginInput';

function LoginPage({ onLoginSuccess }) {
  const [theme] = useTheme();

  return (
    <div
      className={
        (theme === 'light'
          ? 'bg-slate-100 text-slate-900 '
          : 'bg-slate-700 text-slate-200') +
        ' h-screen mt-[-74px] flex justify-center items-center'
      }
    >
      <LoginInput onLoginSuccess={onLoginSuccess} />
    </div>
  );
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func,
};

export default LoginPage;
