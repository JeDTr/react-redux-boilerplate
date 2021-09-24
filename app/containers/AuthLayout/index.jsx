import * as S from "./styled";

import Sidebar from "@/components/Sidebar";

const AuthLayout = ({ children }) => (
  <S.AuthLayout>
    <Sidebar />
    <S.Main>{children}</S.Main>
  </S.AuthLayout>
);

export default AuthLayout;
