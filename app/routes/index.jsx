import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";

const Home = lazy(() => import("@/containers/pages/Home"));
const Login = lazy(() => import("@/containers/pages/Login"));
const Posts = lazy(() => import("@/containers/pages/Post/List"));
const PostCreate = lazy(() => import("@/containers/pages/Post/Create"));
import AuthService from "@/services/api/auth-service";

import RouteAuth from "./RouteAuth";
import RouteUnauth from "./RouteUnauth";

const AppRoutes = () => {
  const { isLoading } = useQuery("profile", () => AuthService.getProfile());

  if (isLoading) return "Loading...";

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<RouteUnauth />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<RouteAuth />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/posts/*" element={<Posts />} /> */}
            <Route path="/posts">
              <Route index element={<Posts />} />
              <Route path="create" element={<PostCreate />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
