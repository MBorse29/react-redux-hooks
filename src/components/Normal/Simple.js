import React from "react";
import { connect } from "react-redux";
import { simpleAction } from "../../reducersAndActions";

const Simple = ({ result, simpleAction }) => {
  return (
    <div>
      <h3>Simple</h3>
      <h4>The message is currently "{result}".</h4>
      <div>
        <button onClick={simpleAction}>simpleAction</button>
      </div>
    </div>
  );
};

export default connect(
  state => ({ result: state.reducer.result }),
  { simpleAction }
)(Simple);
