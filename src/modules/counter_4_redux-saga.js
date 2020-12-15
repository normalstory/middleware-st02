import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
//기본 액션생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//saga
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";
//saga 액션생성함수,마우스 클릭이벤트가 payload 안으로 들어가지 않도록 ()=>undefined를 두번째 파라미터에 넣는다
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);
//제너레이터 함수
function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}
function* decreaseSaga() {
  yield delay(1000); //딜레이
  yield put(decrease()); //특정액션 디스패치
}
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); //takeEvery : 들어오는 모든 액션에 대해 특정작업 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); //takeLatest : 기존에 진행중이던 작업을 취소하고 가장 마지막으로 실행된 작업만 수행
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
