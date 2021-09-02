import React from "react";
import { useQuery } from "react-query";

import PostService from "@/services/api/post-service";

const List = () => {
  const { data: posts } = useQuery("posts", () => PostService.getPosts());

  if (!posts) return null;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
