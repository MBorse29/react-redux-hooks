import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import Simple from "./components/Hooks/Simple";
// import Counter from "./components/Hooks/Counter";
// import Field from "./components/Hooks/Field";
// import Form from "./components/Hooks/Form";

const store = configureStore();

const App = () => {
  return (
    <div>
      <Simple />
      {/* <Counter />
      <Field />
      <Form /> */}
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
