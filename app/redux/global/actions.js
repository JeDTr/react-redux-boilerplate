import { createAsyncAction, createAction } from "@/utils/redux-actions";

export const getUserProfile = createAsyncAction("GET_USER_PROFILE");

export const updateGlobalKey = createAction("UPDATE_GLOBAL_KEY");
