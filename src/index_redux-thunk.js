import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules/index";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
//미들웨어2_redux-logger
import { createLogger } from "redux-logger";
//미들웨어3_redux-thunk
import ReduxThunk from "redux-thunk";

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
