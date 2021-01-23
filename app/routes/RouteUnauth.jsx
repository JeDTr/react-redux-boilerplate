import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "@/contexts/AuthContext";

const RouteUnauth = (props) => {
  const { user } = useAuthContext();

  if (user.isAuthenticated) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default RouteUnauth;
