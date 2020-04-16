import React from "react";
import { Route, Switch } from "react-router-dom";
import Naming from "../../pages/Naming/index";
import Styling from "../../pages/Styling/index";
import Signup from "../../pages/Signup/index";
import SignupSuccess from "../../pages/SignupSuccess";
import Starter from "../../pages/Starter";

const WizardRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Starter />
      </Route>
      <Route path="/name" exact>
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
