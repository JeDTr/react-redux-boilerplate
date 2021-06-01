import React from "react";

import Form from "@/components/Form";

const Create = () => {
  const handleSubmit = () => {
    // TODO
  };

  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        title: "",
        content: "",
      }}
    >
      <Form.Group>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Field type="text" name="title" id="title" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Field type="textarea" name="content" id="content" />
      </Form.Group>
    </Form>
  );
};

export default Create;
