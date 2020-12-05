import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
