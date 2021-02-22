import { call, put, takeLatest, all } from "redux-saga/effects";

import AuthService from "@/services/api/auth-service";

import { getUserProfile } from "./actions";

function* getUserProfileTask() {
  try {
    const profile = yield call([AuthService, AuthService.getProfile]);
    yield put(getUserProfile.success(profile));
  } catch (error) {
    yield put(getUserProfile.failure());
  }
}

export default function* globalSaga() {
  yield all([takeLatest(getUserProfile.request, getUserProfileTask)]);
}
