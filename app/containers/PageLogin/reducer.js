import produce from "immer";

import { handleActions } from "@/utils/redux-actions";

import { login } from "./actions";

const initialState = {
  error: null,
};

export default handleActions(
  {
    [login.success]: produce((draft) => {
      draft.error = initialState.error;
    }),
    [login.failure]: produce((draft, { payload }) => {
      draft.error = payload;
    }),
  },
  initialState,
);
