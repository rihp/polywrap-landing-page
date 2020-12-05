import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import { Home } from "./pages/Home";
import { NavBar } from "./components/Navbar";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <NavBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </div>
    
  );
};

export default App;
