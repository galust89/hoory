import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, path, token }) => {
  console.log(token);
  if (!token) {
    return <Redirect to={{ pathname: "/" }} />;
  }
  return <Route path={path}>{children}</Route>;
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

export default connect(mapStateToProps, null)(PrivateRoute);
