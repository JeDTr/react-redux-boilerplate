import React from "react";
import { useFormContext, useFormState } from "react-hook-form";

import Input from "../Input";

import Feedback from "./Feedback";

const Control = ({ type = "text", name, ...rest }) => {
  const { register, setValue } = useFormContext();

  const handleChange = (newValue) => {
    setValue(name, newValue);
  };

  switch (type) {
    default:
      return (
        <Input
          type={type}
          {...register(name)}
          onChange={handleChange}
          {...rest}
        />
      );
  }
};

const Field = ({ name, ...rest }) => {
  const { errors } = useFormState();
  const error = errors?.[name]?.message;

  return (
    <>
      <Control name={name} invalid={!!error} {...rest} />
      {!!error && <Feedback>{error}</Feedback>}
    </>
  );
};

export default Field;
