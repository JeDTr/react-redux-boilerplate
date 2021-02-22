import produce from "immer";

import { handleActions } from "@/utils/redux-actions";

import { login } from "./actions";

const initialState = {
  errors: null,
};

export default handleActions(
  {
    [login.success]: produce((draft) => {
      draft.errors = initialState.error;
    }),
    [login.failure]: produce((draft, { payload }) => {
      draft.errors = payload;
    }),
  },
  initialState,
);
