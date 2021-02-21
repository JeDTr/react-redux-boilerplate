import produce from "immer";

import { handleActions } from "@/utils/redux-actions";

import { getUserInfo } from "./actions";

const initialState = {
  loading: false,
  error: false,
  currentUser: null,
};

export default handleActions(
  {
    [getUserInfo.success]: produce((draft, { payload }) => {
      draft.currentUser = payload;
    }),
  },
  initialState,
);
