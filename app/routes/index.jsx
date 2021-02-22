import React, { Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTokens } from "@/utils/auth";
import { getUserProfile } from "@/redux/global/actions";

import { ROUTES } from "./constants";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { loading, key } = useSelector((state) => state.global);

  useEffect(() => {
    const { access_token } = getTokens();

    if (access_token) {
      dispatch(getUserProfile.request());
    }
  }, [key]);

  // useEffect(() => {
  //   const handleStorageChange = (e) => {
  //     console.log(e.key);
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => window.removeEventListener("storage", handleStorageChange);
  // }, []);

  if (loading) return "Loading...";

  return (
    <Suspense fallback={null}>
      <Switch>
        {ROUTES.map(({ routeComponent: RouteComponent, path, ...rest }) => (
          <RouteComponent path={path} key={path} {...rest} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
