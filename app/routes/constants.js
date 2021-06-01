import { lazy } from "react";

import RouteAuth from "./RouteAuth";
import RouteUnauth from "./RouteUnauth";

const Home = lazy(() => import("@/containers/pages/Home"));
const Login = lazy(() => import("@/containers/pages/Login"));
const Posts = lazy(() => import("@/containers/pages/Post"));

export const ROUTES = [
  {
    path: "/",
    component: Home,
    routeComponent: RouteAuth,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    routeComponent: RouteUnauth,
  },
  {
    path: "/posts",
    component: Posts,
    routeComponent: RouteAuth,
  },
];
