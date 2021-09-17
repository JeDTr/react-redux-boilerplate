import { createSelector } from "reselect";

const loadingSelector = (state) => state.loading;

export const apiLoadingSelector = createSelector(
  loadingSelector,
  (state) => state.loading,
);
