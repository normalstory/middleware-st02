import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer, { rootSaga } from "./modules/index";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
//미들웨어2_redux-logger
import { createLogger } from "redux-logger";
//미들웨어3_redux-thunk
import ReduxThunk from "redux-thunk";
//미들웨어4_redux-saga
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware(); //redux-saga
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)) //redux-saga
);
sagaMiddleware.run(rootSaga); //redux-saga

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
