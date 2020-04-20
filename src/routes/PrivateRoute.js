import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, path, authorized }) => {
  if (!authorized) {
    return <Redirect to={{ pathname: "/" }} />;
  }
  return (
    <Route path={path} exact>
      {children}
    </Route>
  );
};

const mapStateToProps = (state) => ({
  authorized: state.user.authorized,
});

export default connect(mapStateToProps, null)(PrivateRoute);
