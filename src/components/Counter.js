import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount } from "../reducersAndActions";

const Counter = () => {
  const { count } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const increase = () => dispatch(increaseCount());
  return (
    <div>
      <h3>Counter</h3>
      <h4>The count is currently {count}.</h4>
      <div>
        <button onClick={increase}>increaseCount</button>
      </div>
    </div>
  );
};

export default Counter;
