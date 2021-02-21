import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Form = ({ onSubmit, errors, ...rest }) => {
  const methods = useForm();
  const { handleSubmit, setError } = methods;

  useEffect(() => {
    if (errors) {
      Object.entries(errors).forEach(([name, message]) => {
        setError(name, {
          types: "mannual",
          message,
        });
      });
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} {...rest} />
    </FormProvider>
  );
};

export default Form;
