import React from "react";
import { Route, Switch } from "react-router-dom";
import Naming from "../../pages/Naming/index";
import Styling from "../../pages/Styling/index";
import Signup from "../../pages/Signup/index";
import SignupSuccess from "../../pages/SignupSuccess";

const WizardRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Naming />
      </Route>
      <Route path="/style" exact>
        <Styling />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/signupSuccess" exact>
        <SignupSuccess />
      </Route>
    </Switch>
  );
};

export default WizardRoutes;
