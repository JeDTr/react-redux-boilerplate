import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuthContext } from "../contexts/AuthContext";

import AuthLayout from "@/containers/AuthLayout";

const RouteAuth = ({ component: Component, ...rest }) => (
  // const { user } = useAuthContext();

  // if (!user.isAuthenticated) return <Redirect to="/login" />;

  <Route {...rest}>
    <AuthLayout>
      <Component />
    </AuthLayout>
  </Route>
);
export default RouteAuth;
