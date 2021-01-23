import { lazy } from "react";
import { Route } from "react-router-dom";

// import Posts from "@/pages/Posts";
import RouteAuth from "./RouteAuth";
import RouteUnauth from "./RouteUnauth";

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Posts = lazy(() => import("@/pages/Posts"));

export const ROUTE_COMPONENTS = {
  auth: RouteAuth,
  unauth: RouteUnauth,
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
    routeComponent: ROUTE_COMPONENTS.unauth,
    exact: true,
  },
  {
    path: "/posts",
    component: Posts,
    routeComponent: ROUTE_COMPONENTS.any,
    exact: true,
  },
];
