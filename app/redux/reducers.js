/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import produce from "immer";

import history from "@/utils/history";
// import globalReducer from "containers/App/reducer";
// import languageProviderReducer from "containers/LanguageProvider/reducer";

const initialState = {
  loading: false,
  error: false,
  currentUser: null,
};

const globalReducer = produce((draft, action) => {
  switch (action.type) {
    default:
      break;
  }
}, initialState);

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    // language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
