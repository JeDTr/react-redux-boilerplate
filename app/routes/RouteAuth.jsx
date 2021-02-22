import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLayout from "@/containers/AuthLayout";

const RouteAuth = ({ component: Component, ...rest }) => {
  const currentUser = useSelector((state) => state.global.currentUser);

  if (!currentUser) return <Redirect to="/login" />;

  return (
    <Route {...rest}>
      <AuthLayout>
        <Component />
      </AuthLayout>
    </Route>
  );
};
export default RouteAuth;
