import React from "react";
import { connect } from "react-redux";
import { increaseCount } from "../../reducersAndActions";

const Counter = ({ increaseCount, count }) => (
  <div>
    <h3>Counter</h3>
    <h4>The count is currently {count}.</h4>
    <div>
      <button onClick={increaseCount}>increaseCount</button>
    </div>
  </div>
);

export default connect(
  state => ({ count: state.reducer.count }),
  { increaseCount }
)(Counter);
