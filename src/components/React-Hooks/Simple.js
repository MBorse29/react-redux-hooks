import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "../../reducersAndActions";

const Simple = () => {
  const { result } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const swap = useCallback(() => dispatch(simpleAction()), [dispatch]);
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
