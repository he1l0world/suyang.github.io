import LoginPage from './components/authentication/LoginPage';
import { RootState } from './redux/globalStore';
import { useSelector } from 'react-redux';
import ThemeModeSelect from './components/home/ThemModeSelect';
import AppTheme from './components/home/AppTheme';
import React from 'react';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <AppTheme>
      <ThemeModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }}>
        <LoginPage />
      </ThemeModeSelect>
    </AppTheme>
  );
};

export default App;
