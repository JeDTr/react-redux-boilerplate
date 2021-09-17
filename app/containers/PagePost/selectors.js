import { createSelector } from "reselect";

const postsSelector = (state) => state.posts;

export const errorsSelector = createSelector(
  postsSelector,
  (state) => state.posts,
);
