import React from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { useStores } from "@/mobx/context";

const RouteUnauth = (props) => {
  const { authStore } = useStores();

  if (authStore.profile) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default observer(RouteUnauth);
