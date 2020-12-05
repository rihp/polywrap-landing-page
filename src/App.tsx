import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/navbar";

const App: React.FC = () => {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
