import produce from "immer";

import { handleActions } from "@/utils/redux-actions";

import { getUserProfile, updateGlobalKey } from "./actions";

const initialState = {
  loading: false,
  error: false,
  currentUser: null,
  key: Date.now(),
};

export default handleActions(
  {
    [updateGlobalKey]: produce((draft) => {
      draft.key = Date.now();
    }),
    [getUserProfile.request]: produce((draft) => {
      draft.loading = true;
    }),
    [getUserProfile.success]: produce((draft, { payload }) => {
      draft.currentUser = payload;
      draft.loading = false;
    }),
    [getUserProfile.failure]: produce((draft) => {
      draft.loading = false;
    }),
  },
  initialState,
);
