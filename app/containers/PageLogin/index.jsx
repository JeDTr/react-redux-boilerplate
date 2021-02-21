import React from "react";
import { useHistory } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { useDispatch } from "react-redux";

import Form from "@/components/Form";
import Button from "@/components/Button";

import { key } from "./constants";
import reducer from "./reducer";
import saga from "./saga";
import { login } from "./actions";
import * as S from "./styled";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { setUser } = useAuthContext();
  // const [mutate, { isLoading, error }] = useMutation((data) =>
  //   axios.post("http://localhost:5000/login", data),
  // );

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const handleSubmit = (values) => {
    dispatch(login.request(values));
  };

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <Form
          onSubmit={handleSubmit}
          // errors={error?.response?.data}
        >
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
