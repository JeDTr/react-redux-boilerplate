import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useQuery } from "react-query";

import AuthService from "@/services/api/auth-service";

import { ROUTES } from "./constants";

const AppRoutes = () => {
  const { isLoading } = useQuery("profile", () => AuthService.getProfile());

  if (isLoading) return "Loading...";

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          {ROUTES.map(({ routeComponent: RouteComponent, path, ...rest }) => (
            <RouteComponent path={path} key={path} {...rest} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
