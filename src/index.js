import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";

import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// add imports and code

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
