import React from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react-lite";

import AuthLayout from "@/containers/AuthLayout";
import { useStores } from "@/mobx/context";

const RouteAuth = ({ component: Component, ...rest }) => {
  const { authStore } = useStores();

  if (!authStore.profile) return <Redirect to="/login" />;

  return (
    <Route {...rest}>
      <AuthLayout>
        <Component />
      </AuthLayout>
    </Route>
  );
};
export default observer(RouteAuth);
