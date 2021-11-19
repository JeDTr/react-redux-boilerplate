import React from "react";

import Form from "@/components/Form";
import Button from "@/components/Button";

const Create = () => {
  const handleSubmit = (values) => {
    // TODO
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        title: "",
        content: "",
        datepicker: "",
        daterangepicker: "",
        start2: "",
        end2: "",
      }}
    // enableLeavingPrompt={false}
    >
      <Form.Group>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Field type="text" name="title" id="title" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="datepicker">Datepicker</Form.Label>
        <Form.Field type="datepicker" name="datepicker" id="datepicker" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="daterangepicker">Daterangepicker 1</Form.Label>
        <Form.Field
          id="daterangepicker"
          type="daterangepicker"
          name="daterangepicker"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="daterangepicker2">Daterangepicker 2</Form.Label>
        <Form.Field
          id="daterangepicker2"
          type="daterangepicker2"
          startName="start2"
          endName="end2"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Field type="textarea" name="content" id="content" />
      </Form.Group>
      <Button type="submit">Hehe</Button>
    </Form>
  );
};

export default Create;
