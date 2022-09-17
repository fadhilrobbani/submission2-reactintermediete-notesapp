import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <>
      <ThemeProvider>
        <LocaleProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/notes/'>
              <Route index element={<NotFoundPage />} />
              <Route path=':id' element={<NoteDetailPages />} />
              <Route path='new' element={<NewNotePage />} />
            </Route>
            <Route path='archives' element={<ArchiveNotesPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
