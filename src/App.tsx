import React from 'react';
import {Button} from '@mui/material';
const handleClick = () => {
  alert('Button clicked!');
}

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}


export default App;