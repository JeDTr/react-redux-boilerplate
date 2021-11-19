import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useQueryClient } from "react-query";

const RouteUnauth = () => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData("profile");

  if (profile) return <Navigate to="/posts/create" />;

  return <Outlet />;
};

export default RouteUnauth;
