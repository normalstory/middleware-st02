import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
// import createRequestThunk from "../lib/createRequestThunk";

//saga
// import { call, put, takeLatest } from "redux-saga/effects";
// import { startLoading, finishLoading } from "./loading";
//saga refactoring
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga";

//액션타입 선언, 한 액션당 3 set
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE"; //refactoring

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
// const GET_USER_FAILURE = "sample/GET_USER_FAILURE"; //refactoring

/**saga */
export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USER);
/**saga + refactoring */
// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST)); //로딩 시작, 파라미터로 action을 받아오면 액션정보 조회가능
//   try {
//     //call - promise를 반환하는 함수를 호출하고 기다릴 수 있다(함수, 해당 함수에 넣을 인자)
//     const post = yield call(api.getPost, action.payload); //= api.getPost(action.payload)
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data,
//     });
//   } catch (e) {
//     //에러 잡기
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_POST)); //로딩완료
// }
const getPostSaga = createRequestSaga(GET_POST, api.getPost);

// function* getUsersSaga(action) {
//   yield put(startLoading(GET_USER));
//   try {
//     const users = yield call(api.getUsers, action.payload);
//     yield put({
//       type: GET_USER_SUCCESS,
//       payload: users.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_USER_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_USER));
// }
const getUsersSaga = createRequestSaga(GET_USER, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USER, getUsersSaga);
}

//초기상태
const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
