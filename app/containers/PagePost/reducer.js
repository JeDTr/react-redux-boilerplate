import produce from "immer";

import { handleActions } from "@/utils/redux-actions";

import { getPosts } from "./actions";

const initialState = {
  errors: null,
  posts: [],
};

export default handleActions(
  {
    [getPosts.success]: produce((draft, { payload }) => {
      draft.posts = payload;
      draft.errors = initialState.error;
    }),
    [getPosts.failure]: produce((draft, { payload }) => {
      draft.errors = payload;
    }),
  },
  initialState,
);
