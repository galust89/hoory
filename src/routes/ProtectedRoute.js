import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, path, value }) => {
  if (!value) {
    return <Redirect to={{ pathname: "/" }} />;
  }
  return (
    <Route path={path} exact>
      {children}
    </Route>
  );
};

export default ProtectedRoute;
