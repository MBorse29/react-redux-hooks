import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm } from "../../reducersAndActions";

const Form = () => {
  const { form } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const change = useCallback(e => dispatch(updateForm(e)), [dispatch]);
  return (
    <div>
      <h3>Form</h3>
      <h4>The form object is {JSON.stringify(form)}.</h4>
      <div>
        <input
          type="text"
          value={form.name}
          onChange={e => change({ name: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          value={form.age}
          onChange={e => change({ age: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          value={form.home}
          onChange={e => change({ home: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Form;
