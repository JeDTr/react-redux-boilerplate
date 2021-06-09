import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

import Input from "../Input";
import Textarea from "../Textarea";
import Datepicker from "../Datepicker";

import Feedback from "./Feedback";

const Control = ({ type = "text", register, name, ...rest }) => {
  const { control, setValue } = useFormContext();

  const value = useWatch({ control, name });

  const handleChange = (newValue) => {
    setValue(name, newValue);
  };

  switch (type) {
    case "textarea":
      return (
        <Textarea
          ref={register}
          name={name}
          // value={value}
          onChange={handleChange}
          {...rest}
        />
      );
    case "datepicker":
      return (
        <Datepicker
          ref={register}
          name={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />
      );
    default:
      return (
        <Input
          type={type}
          ref={register}
          name={name}
          // value={value}
          onChange={handleChange}
          {...rest}
        />
      );
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
