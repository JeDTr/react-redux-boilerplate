import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import Form from "@/components/Form";
import Button from "@/components/Button";
import { setTokens } from "@/utils/auth";
import AuthService from "@/services/api/auth-service";

import * as S from "./styled";

const Login = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading, error } = useMutation((data) =>
    AuthService.login(data),
  );

  const handleSubmit = (values) => {
    login(values, {
      onSuccess: async (tokens) => {
        setTokens(tokens);
        queryClient.setQueryData("tokens", tokens);
        await queryClient.refetchQueries(["profile"]);
        history.push("/posts");
      },
    });
  };

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <Form onSubmit={handleSubmit} errors={error}>
          <Form.Group>
            <Form.Label htmlFor="email">Email (*)</Form.Label>
            <Form.Field type="text" name="email" id="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password (*)</Form.Label>
            <Form.Field type="password" name="password" id="password" />
          </Form.Group>
          <Button type="submit" disabled={isLoading} extend>
            Submit
          </Button>
        </Form>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default Login;
