import { call, put, takeLatest } from "redux-saga/effects";

import AuthService from "@/services/api/auth-service";

import { login } from "./actions";

function* loginTask({ payload }) {
  try {
    yield call([AuthService, AuthService.login], payload);
    yield put(login.success());
  } catch (error) {
    yield put(login.failure(error));
  }
}

export default function* () {
  yield takeLatest(login.request, loginTask);
}
