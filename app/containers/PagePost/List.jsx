import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions";

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts.request());
  }, []);

  return <div>Page Post Lists</div>;
};

export default List;
