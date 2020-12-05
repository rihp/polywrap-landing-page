import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar';
import { TextField, ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import { HomePage } from './pages/home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <HomePage/>
        <TextField></TextField>
      </ThemeProvider>
    </div>
  );
}

export default App;
