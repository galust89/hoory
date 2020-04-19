import React from "react";
import { Route, Switch } from "react-router-dom";
import Naming from "../../pages/Naming/index";
import Styling from "../../pages/Styling/index";
import Signup from "../../pages/Signup/index";
import SignupSuccess from "../../pages/SignupSuccess";
import ProtectedRoute from './../../routes/ProtectedRoute';
import { connect } from 'react-redux';
import PrivateRoute from './../../routes/PrivateRoute';

const WizardRoutes = ({authorized, creationMode}) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Naming />
      </Route>
      <Route path="/style" exact>
        <Styling />
      </Route>
      <ProtectedRoute path="/signup" value={!authorized}>
        <Signup />
      </ProtectedRoute>
      <ProtectedRoute path="/signupSuccess" value={creationMode}>
        <SignupSuccess />
      </ProtectedRoute>
    </Switch>
  );
};
const mapStateToProps = (state) => ({
  authorized: state.user.authorized,  
  creationMode: state.user.creationMode,  
});

export default connect(mapStateToProps, null)(WizardRoutes);
