import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeProvider } from './context/ThemeProvider';
import { LocaleProvider } from './context/LocaleProvider';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoteDetailPages from './pages/NoteDetailPage';
import NewNotePage from './pages/NewNotePage';
import ArchiveNotesPage from './pages/ArchiveNotesPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { useEffect, useState } from 'react';
import LoadingSkeleton from './components/LoadingSkeleton';
import FloatingButtons from './components/FloatingButtons';
import swal from 'sweetalert';

function App() {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogoutHandler = () => {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/login');
    setInitializing(false);
  };
  useEffect(() => {
    const isLogged = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      } catch (error) {
        swal('Something is wrong, please login again');
        navigate('/login');
      }
    };
    isLogged();
  }, []);

  if (initializing) {
    return (
      <>
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            <LoadingSkeleton />
          </LocaleProvider>
        </ThemeProvider>
      </>
    );
  }

  if (authedUser === null) {
    return (
      <>
        <ThemeProvider>
          <LocaleProvider>
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route
                  path='/*'
                  element={<LoginPage onLoginSuccess={onLoginSuccess} />}
                />
                <Route path='/register' element={<RegisterPage />} />
              </Routes>
            </main>
          </LocaleProvider>
        </ThemeProvider>
      </>
    );
  }
  return (
    <>
      <ThemeProvider>
        <LocaleProvider>
          <header>
            <Navbar onLogoutHandler={onLogoutHandler} name={authedUser.name} />
          </header>
          <main>
            {window.location.pathname === '/' ? <FloatingButtons /> : null}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/notes/'>
                <Route index element={<NotFoundPage />} />
                <Route path=':id' element={<NoteDetailPages />} />
                <Route path='new' element={<NewNotePage />} />
              </Route>
              <Route path='archives' element={<ArchiveNotesPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
