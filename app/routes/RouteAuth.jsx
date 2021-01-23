import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const RouteAuth = (props) => {
  const { user } = useAuthContext();

  if (!user.isAuthenticated) return <Redirect to="/login" />;

  return <Route {...props} />;
};

export default RouteAuth;
