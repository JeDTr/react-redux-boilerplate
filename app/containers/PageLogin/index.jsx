import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Form from "@/components/Form";
import Button from "@/components/Button";
import { useStores } from "@/mobx/context";

import * as S from "./styled";

const Login = () => {
  const history = useHistory();
  const { authStore } = useStores();
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setSubmitting(true);

    try {
      await authStore.login(values);
      history.push("/posts");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <Form onSubmit={handleSubmit} errors={authStore.errors}>
          <Form.Group>
            <Form.Label htmlFor="email">Email (*)</Form.Label>
            <Form.Field type="text" name="email" id="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password (*)</Form.Label>
            <Form.Field type="password" name="password" id="password" />
          </Form.Group>
          <Button type="submit" disabled={isSubmitting} extend>
            Submit
          </Button>
        </Form>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default observer(Login);
