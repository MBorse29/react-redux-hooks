import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "./store";

/* Implementation of Connect HOC */

import Simple from "./components/Normal/Simple";
import Counter from "./components/Normal/Counter";
import Field from "./components/Normal/Field";

/* Implementation of React-Redux Hooks */

// import Simple from "./components/React-Hooks/Simple";
// import Counter from "./components/React-Hooks/Counter";
// import Field from "./components/React-Hooks/Field";

const store = configureStore();

const App = () => {
  return (
    <div>
      <Simple />
      <Counter />
      <Field />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
