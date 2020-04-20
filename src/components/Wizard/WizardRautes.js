import React from "react";
import { Route, Switch } from "react-router-dom";
import Naming from "../../pages/Naming/index";
import Styling from "../../pages/Styling/index";
import Signup from "../../pages/Signup/index";
import SignupSuccess from "../../pages/SignupSuccess";
import ProtectedRoute from "./../../routes/ProtectedRoute";
import { connect } from "react-redux";

const WizardRoutes = ({ authorized, creationMode, initialLoad }) => {
  return (
    <Switch>
      <ProtectedRoute
        path="/"
        exact
        redirectCretirea={initialLoad}
        redirectRoute="/dashboard"
      >
        <Naming />
      </ProtectedRoute>
      <ProtectedRoute
        redirectCretirea={initialLoad}
        redirectRoute="/dashboard"
        path="/style"
        exact
      >
        <Styling />
      </ProtectedRoute>
      <ProtectedRoute
        path="/signup"
        redirectCretirea={authorized}
        redirectRoute="/"
        exact
      >
        <Signup />
      </ProtectedRoute>
      <ProtectedRoute
        path="/signupSuccess"
        redirectCretirea={!creationMode}
        redirectRoute="/"
        exact
      >
        <SignupSuccess />
      </ProtectedRoute>
    </Switch>
  );
};
const mapStateToProps = (state) => ({
  authorized: state.user.authorized,
  creationMode: state.user.creationMode,
  initialLoad: state.user.initialLoad,
});

export default connect(mapStateToProps, null)(WizardRoutes);
