import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies

import Prompt from "@/components/Prompt";

const Form = ({
  enableLeavingPrompt = true,
  onSubmit,
  errors,
  defaultValues,
  ...rest
}) => {
  const formBag = useForm({ defaultValues });
  const { handleSubmit, setError } = formBag;

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
    <>
      <FormProvider {...formBag}>
        {enableLeavingPrompt && <Prompt />}
        <form onSubmit={handleSubmit(onSubmit)} {...rest} />
      </FormProvider>
    </>
  );
};

export default Form;
