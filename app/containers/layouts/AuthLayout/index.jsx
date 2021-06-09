import React from "react";

import Sidebar from "@/components/Sidebar";

import * as S from "./styled";

const AuthLayout = ({ children }) => (
  <S.AuthLayout>
    <Sidebar />
    <S.Main>{children}</S.Main>
  </S.AuthLayout>
);

export default AuthLayout;
