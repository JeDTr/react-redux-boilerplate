import React from "react";
import { useFormContext } from "react-hook-form";

import Input from "../Input";

import Feedback from "./Feedback";

const Control = ({ type = "text", register, ...rest }) => {
  switch (type) {
    default:
      return <Input type={type} ref={register} {...rest} />;
  }
};

const Field = ({ name, ...rest }) => {
  const { errors, register } = useFormContext();
  const error = errors?.[name]?.message;

  return (
    <>
      <Control name={name} invalid={!!error} register={register} {...rest} />
      {error && <Feedback>{error}</Feedback>}
    </>
  );
};

export default Field;
