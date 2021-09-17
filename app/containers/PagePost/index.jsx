import React, { memo } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useInjectSaga, useInjectReducer } from "redux-injectors";

import List from "./List";
import Create from "./Create";
import { key } from "./constants";
import reducer from "./reducer";
import saga from "./saga";

const PagePost = () => {
  const { path } = useRouteMatch();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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

export default memo(PagePost);
