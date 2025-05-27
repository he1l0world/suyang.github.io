import AppTheme from './components/home/AppTheme';
import HomePage from './components/home/HomePage';
import ProjectsPage from './components/home/ProjectsPage';
import RestaurantHome from './components/projects/restaurant/RestaurantHome';
import ShoppingCart from './components/projects/restaurant/ShoppingCart';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <BrowserRouter>
          <div className='min-h-screen bg-gray-50'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/projects'>
                <Route index element={<ProjectsPage />} />
                <Route path='restaurant' element={<RestaurantHome />} />
                <Route path='cart' element={<ShoppingCart/>}/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AppTheme>
    </ThemeProvider>
  );
};

export default App;
