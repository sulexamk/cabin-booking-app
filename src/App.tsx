import React from 'react';
import MokkiVaraus from './MokkiVaraus';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';



function App() {

  const theme = createTheme();
  
  return (
    <div>
      <h2>Lomamökin varaus</h2>
      <MokkiVaraus />
    </div>
  );
}

export default App;
