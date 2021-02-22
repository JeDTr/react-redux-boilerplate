import React from "react";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { useDispatch, useSelector } from "react-redux";

import Form from "@/components/Form";
import Button from "@/components/Button";

import { key } from "./constants";
import reducer from "./reducer";
import saga from "./saga";
import { login } from "./actions";
import { errorsSelector } from "./selectors";
import * as S from "./styled";

const Login = () => {
  const dispatch = useDispatch();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const errors = useSelector(errorsSelector);

  const handleSubmit = (values) => {
    dispatch(login.request(values));
  };

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <Form onSubmit={handleSubmit} errors={errors}>
          <Form.Group>
            <Form.Label htmlFor="email">Email (*)</Form.Label>
            <Form.Field type="text" name="email" id="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password (*)</Form.Label>
            <Form.Field type="password" name="password" id="password" />
          </Form.Group>
          <Button
            type="submit"
            // disabled={isLoading}
            extend
          >
            Submit
          </Button>
        </Form>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default Login;
