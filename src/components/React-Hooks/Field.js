import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../../reducersAndActions";

const Field = () => {
  const { field } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const change = useCallback(e => dispatch(updateField(e.target.value)), [
    dispatch
  ]);
  return (
    <div>
      <h3>Field</h3>
      <h4>The field currently reads "{field}".</h4>
      <div>
        <input type="text" value={field} onChange={change} />
      </div>
    </div>
  );
};

export default Field;
