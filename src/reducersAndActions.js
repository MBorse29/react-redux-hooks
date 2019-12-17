import { combineReducers } from "redux";

//REDUCER
// Set up reducer and switch
const reducer = (
  state = {
    result: "buffy",
    count: 0,
    field: "whaddup",
    form: {
      name: "bob",
      age: 21,
      home: "UT"
    }
  },
  action
) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        ...state,
        result: state.result === "the slayer" ? "buffy" : "the slayer"
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + 1
      };
    case "UPDATE_FIELD":
      return {
        ...state,
        field: action.payload
      };
    case "UPDATE_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

// ACTIONS
// combined action and reducer files to easily develop little projects like this one
const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

const increaseCount = () => dispatch => {
  dispatch({
    type: "INCREASE_COUNT"
  });
};

const updateField = field => dispatch => {
  dispatch({
    type: "UPDATE_FIELD",
    payload: field
  });
};

const updateForm = form => dispatch => {
  dispatch({
    type: "UPDATE_FORM",
    payload: form
  });
};

export { simpleAction, increaseCount, updateField, updateForm };

//COMBINE REDUCERS
// added combine reducers to this file to easily develop little projects like this one
export default combineReducers({
  reducer
});
