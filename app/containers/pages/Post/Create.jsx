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
        schedule_time: "",
      }}
    >
      <Form.Group>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Field type="text" name="title" id="title" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="schedule_time">Schedule Time</Form.Label>
        <Form.Field type="datepicker" name="schedule_time" id="schedule_time" />
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
