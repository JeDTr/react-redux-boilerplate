import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQueryClient } from "react-query";

import AuthLayout from "@/containers/AuthLayout";

const RouteAuth = ({ component: Component, ...rest }) => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData("profile");

  if (!profile) return <Redirect to="/login" />;

  return (
    <Route {...rest}>
      <AuthLayout>
        <Component />
      </AuthLayout>
    </Route>
  );
};
export default RouteAuth;
