import { call, put, takeLatest, all } from "redux-saga/effects";

import PostService from "@/services/api/post-service";

import { getPosts } from "./actions";

function* getPostsTask({ payload }) {
  try {
    const posts = yield call([PostService, PostService.getPosts], payload);
    yield put(getPosts.success(posts));
  } catch (error) {
    yield put(getPosts.failure(error));
  }
}

export default function* getPostsSaga() {
  yield all([takeLatest(getPosts.request, getPostsTask)]);
}
