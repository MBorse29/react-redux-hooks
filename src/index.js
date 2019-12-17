import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "./store";

// import Simple from "./components/React-Hooks/Simple";
import Counter from "./components/React-Hooks/Counter";
import Field from "./components/React-Hooks/Field";
import Form from "./components/React-Hooks/Form";

import Simple from "./components/Normal/Simple";

const store = configureStore();

const App = () => {
  return (
    <div>
      <Simple />
      {/* <Counter /> */}
      {/* <Field /> */}
      {/* <Form /> */}
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
