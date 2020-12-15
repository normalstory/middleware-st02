import { combineReducers } from "redux";
// import counter from "./counter";
// import sample from "./sample";
import loading from "./loading";
//saga
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";

const rootReducer = combineReducers({ counter, sample, loading });

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]); //all - 여러 saga를 합쳐주는 역할 수행
}
export default rootReducer;
