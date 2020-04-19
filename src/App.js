import React, {useEffect} from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Wizard from "./components/Wizard/index";
import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";
import { getToken } from './utils/getToken';


function App() {
  useEffect(()=>{
   if(getToken()){
       
   }
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        {/* <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute> */}
        <Wizard />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
