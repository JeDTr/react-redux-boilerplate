import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

import { ROUTES } from "./constants";

const AppRoutes = () => (
  <Suspense fallback={null}>
    <Switch>
      {ROUTES.map(({ routeComponent: RouteComponent, path, ...rest }) => (
        <RouteComponent path={path} key={path} {...rest} />
      ))}
    </Switch>
  </Suspense>
);

export default AppRoutes;
