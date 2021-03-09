import React from "react";
import "./actions.scss";
import Results from "../results/results";

function Actions(props) {
  const {
    setGameStatus,
    gameStatus,
    counter,
    counterHit,
    setCounter,
    setCounterHit,
  } = props;
  let startGame = function () {
    setCounter(-1);
    setCounterHit(0);
    setGameStatus("started");
  };
  return (
    <React.Fragment>
      <div className={"start-game"}>
        <h1>Whack a mole</h1>
        {gameStatus === "ended" && (
          <div className={"results-wrapper"}>
            <Results counterHit={counterHit} counter={counter} title={false} />
          </div>
        )}
        <button onClick={startGame}>
          {gameStatus === "start" && (
            <React.Fragment>Start a game</React.Fragment>
          )}
          {gameStatus === "ended" && <React.Fragment>Try again</React.Fragment>}
        </button>
      </div>
    </React.Fragment>
  );
}

export default Actions;
