import { lazy } from "react";
import { Route } from "react-router-dom";

// import Posts from "@/pages/Posts";
import RouteAuth from "./RouteAuth";
// import RouteUnauth from "./RouteUnauth";

const Home = lazy(() => import("@/containers/PageHome"));
const Login = lazy(() => import("@/containers/PageLogin"));
const Posts = lazy(() => import("@/containers/PagePost"));

export const ROUTE_COMPONENTS = {
  auth: RouteAuth,
  // unauth: RouteUnauth,
  any: Route,
};

export const ROUTES = [
  {
    path: "/",
    component: Home,
    routeComponent: ROUTE_COMPONENTS.auth,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    routeComponent: ROUTE_COMPONENTS.any,
  },
  // {
  //   path: "/login",
  //   component: Login,
  //   routeComponent: ROUTE_COMPONENTS.unauth,
  //   exact: true,
  // },
  {
    path: "/posts",
    component: Posts,
    routeComponent: ROUTE_COMPONENTS.auth,
  },
];
