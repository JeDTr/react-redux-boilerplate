import { lazy } from "react";

// import Posts from "@/pages/Posts";
import RouteAuth from "./RouteAuth";
import RouteUnauth from "./RouteUnauth";

const Home = lazy(() => import("@/containers/PageHome"));
const Login = lazy(() => import("@/containers/PageLogin"));
const Posts = lazy(() => import("@/containers/PagePost"));

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
