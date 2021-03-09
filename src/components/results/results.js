import React from "react";
import "./results.scss";

function Results(props) {
  let { counterHit, counter, title } = props;
  return (
    <div className={"results " + (!title ? "results-end" : "")}>
      {title && <h1>Whack a mole</h1>}
      <p>
        score {counterHit} / {counter}
      </p>
    </div>
  );
}

export default Results;
