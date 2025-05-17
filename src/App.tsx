import React from 'react';
import MokkiVaraus from './MokkiVaraus';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import './App.css';


function App() {

  const theme = createTheme();
  
  return (
    <div>
      <h2 className="otsikko">Lomamökin varaus</h2>
      <MokkiVaraus />
    </div>
  );
}

export default App;
