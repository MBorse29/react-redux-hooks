import React from "react";
import { connect } from "react-redux";
import { updateField } from "../../reducersAndActions";

const Field = ({ updateField, field }) => {
  const change = e => updateField(e.target.value);
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

export default connect(
  state => ({ field: state.reducer.field }),
  { updateField }
)(Field);
