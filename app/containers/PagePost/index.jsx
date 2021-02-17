import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import List from "./List";
import Create from "./Create";

const PagePost = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <List />
      </Route>
      <Route exact path={`${path}/create`}>
        <Create />
      </Route>
    </Switch>
  );
};

export default PagePost;
