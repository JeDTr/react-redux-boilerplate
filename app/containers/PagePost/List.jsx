import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions";

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts.request());
  }, []);

  return <div>Page Post List</div>;
};

export default List;
