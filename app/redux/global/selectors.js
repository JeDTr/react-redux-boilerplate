import { createSelector } from "reselect";

const globalSelector = (state) => state.global;

export const loadingSelector = createSelector(
  globalSelector,
  (state) => state.loading,
);
