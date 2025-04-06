import AppTheme from './components/home/AppTheme';
import NavBar from './components/home/NavBar';
import HomePage from './components/home/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectsPage from './components/home/ProjectsPage';

const App = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <div className='min-h-screen bg-gray-50 '>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='projects' element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppTheme>
  );
};

export default App;
