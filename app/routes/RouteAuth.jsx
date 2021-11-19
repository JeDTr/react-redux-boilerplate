import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useQueryClient } from "react-query";

import AuthLayout from "@/containers/layouts/AuthLayout";

const RouteAuth = () => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData("profile");

  if (!profile) return <Navigate to="/login" />;

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
export default RouteAuth;
