import { call, put, takeLatest, all } from "redux-saga/effects";

import AuthService from "@/services/api/auth-service";
import { setTokens } from "@/utils/auth";
import { getUserProfile } from "@/redux/global/actions";

import { login } from "./actions";

function* loginTask({ payload }) {
  try {
    const { refresh_token, access_token } = yield call(
      [AuthService, AuthService.login],
      payload,
    );
    yield put(login.success());
    setTokens({ access_token, refresh_token });
    yield put(getUserProfile.request());
  } catch (error) {
    yield put(login.failure(error));
  }
}

export default function* loginSaga() {
  yield all([takeLatest(login.request, loginTask)]);
}
