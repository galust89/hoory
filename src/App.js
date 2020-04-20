import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Wizard from "./components/Wizard/index";
import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Wizard />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
