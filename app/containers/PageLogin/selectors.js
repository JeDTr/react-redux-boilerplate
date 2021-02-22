import { createSelector } from "reselect";

const loginSelector = (state) => state.login;

export const errorsSelector = createSelector(
  loginSelector,
  (state) => state.errors,
);
