import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { ROUTES } from "./constants";

const AppRoutes = () => (
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

export default AppRoutes;
