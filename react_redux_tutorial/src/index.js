import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../src/store/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Provider wraps up your React application and makes it aware of the entire Redux's store.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//https://www.valentinog.com/blog/redux/#react-redux-tutorial-list-component-and-redux-state
