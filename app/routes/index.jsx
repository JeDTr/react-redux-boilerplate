import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { useStores } from "@/mobx/context";

import { ROUTES } from "./constants";

const AppRoutes = () => {
  const { authStore } = useStores();

  useEffect(() => {
    authStore.fetchProfile();
  }, []);

  if (authStore.isLoading) return "Loading...";

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

export default observer(AppRoutes);
