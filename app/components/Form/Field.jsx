import React from "react";
import { useFormContext, Controller, useFormState } from "react-hook-form";

import Input from "../Input";
import Textarea from "../Textarea";
import Datepicker from "../Datepicker";
import Daterangepicker from "../Daterangepicker";
import Daterangepicker2 from "../Daterangepicker2";

import Feedback from "./Feedback";

const Control = ({ type = "text", name, startName, endName, ...rest }) => {
  const { register, setValue, watch, control } = useFormContext();

  const handleChange = (newValue) => {
    setValue(name, newValue);
  };

  const handleDaterangepickerChange = (newStartDate, newEndDate) => {
    setValue(startName, newStartDate);
    setValue(endName, newEndDate);
  };

  switch (type) {
    case "textarea":
      return <Textarea {...register(name)} onChange={handleChange} {...rest} />;
    case "datepicker":
      return (
        <Datepicker
          {...register(name)}
          value={watch(name)}
          onChange={handleChange}
          {...rest}
        />
      );
    case "daterangepicker":
      return (
        <Daterangepicker
          {...register(name)}
          value={watch(name)}
          onChange={handleChange}
          {...rest}
        />
      );
    case "daterangepicker2":
      return (
        <Controller
          control={control}
          name={name}
          render={({ onBlur }) => (
            <Daterangepicker2
              onBlur={onBlur}
              startName={startName}
              endName={endName}
              startDate={watch(startName)}
              endDate={watch(endName)}
              onChange={handleDaterangepickerChange}
              {...rest}
            />
          )}
        />
      );
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
      {error && <Feedback>{error}</Feedback>}
    </>
  );
};

export default Field;
