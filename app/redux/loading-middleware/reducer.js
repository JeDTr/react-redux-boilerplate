import produce from "immer";

import { handleActions } from "@/utils/redux-actions";

import { showLoading, hideLoading } from "./actions";

const initialState = {
  loading: false,
};

export default handleActions(
  {
    [showLoading]: produce((draft) => {
      draft.loading = true;
    }),
    [hideLoading]: produce((draft) => {
      draft.loading = false;
    }),
  },
  initialState,
);
