/* eslint-disable indent */
import { showLoading, hideLoading } from "./actions";

const middleware = ({ dispatch }) => (next) => (action) => {
  const actionType = action.type.toString();

  if (actionType.endsWith("REQUEST")) {
    dispatch(showLoading());
  }

  if (actionType.endsWith("SUCCESS") || actionType.endsWith("FAILURE")) {
    dispatch(hideLoading());
  }

  return next(action);
};

export default middleware;
