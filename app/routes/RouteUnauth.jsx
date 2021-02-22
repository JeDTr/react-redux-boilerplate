import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const RouteUnauth = (props) => {
  const currentUser = useSelector((state) => state.global.currentUser);

  if (currentUser) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default RouteUnauth;
