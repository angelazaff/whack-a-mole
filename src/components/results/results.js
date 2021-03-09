import React from "react";
import "./results.scss";

function Results(props) {
  let { counterHit, counter, title } = props;
  let result = counter / counterHit;
  return (
    <div className={"results " + (!title ? "results-end" : "")}>
      {title && <h1>Whack a mole</h1>}
      <p>
        score {counterHit} / {counter}
        {(result > 2 && !title) &&
        <span>
          <br/>
          Yikes! You can also try hitting the moles you know?

          </span>
        }
        {(result <= 2 && !title) &&
        <span>
          <br/>
          Great job! You just lost 15 seconds of your life

        </span>
        }

      </p>
    </div>
  );
}

export default Results;
