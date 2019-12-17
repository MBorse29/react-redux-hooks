import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "../reducersAndActions";

const Simple = () => {
  const { result } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const swap = () => dispatch(simpleAction());
  return (
    <div>
      <h3>Simple</h3>
      <h4>The message is currently "{result}".</h4>
      <div>
        <button onClick={swap}>simpleAction</button>
      </div>
    </div>
  );
};

export default Simple;
