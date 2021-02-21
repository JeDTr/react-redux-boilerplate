import { createAction, handleActions } from "redux-actions";
import identity from "lodash-es/identity";
import produce from "immer";

export const createAsyncAction = (type, options) =>
  produce({}, (draft) => {
    ["request", "success", "failure"].forEach((suffix) => {
      draft[suffix] = createAction(
        `${
          options?.prefix ? `${options.prefix}/` : ""
        }${type}/${suffix}`.toUpperCase(),
        identity,
      );
    });
  });

export { createAction, handleActions };
