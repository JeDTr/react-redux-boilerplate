import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQueryClient } from "react-query";

const RouteUnauth = (props) => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData("profile");

  if (profile) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default RouteUnauth;
