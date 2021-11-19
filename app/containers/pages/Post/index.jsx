import React from "react";
import { Routes, Route } from "react-router-dom";

import List from "./List";
import Create from "./Create";

const PagePost = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default PagePost;
