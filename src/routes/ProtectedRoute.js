import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  children,
  path,
  redirectCretirea,
  redirectRoute,
}) => {
  console.log(redirectCretirea);
  if (redirectCretirea) {
    return <Redirect to={{ pathname: redirectRoute }} />;
  }
  return (
    <Route path={path} exact>
      {children}
    </Route>
  );
};

export default ProtectedRoute;
