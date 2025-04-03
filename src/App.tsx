import LoginPage from './components/authentication/LoginPage';
import { RootState } from './redux/globalStore';
import { useSelector } from 'react-redux';
import React from 'react';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <LoginPage />
  );
}


export default App;