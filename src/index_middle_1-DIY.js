import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules/index";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
//미들웨어1_DIY
import loggerMiddlewareDIY from "./lib/loggerMiddlewareDIY";

const store = createStore(rootReducer, applyMiddleware(loggerMiddlewareDIY));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
