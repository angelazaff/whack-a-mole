import React, { useEffect } from "react";
import "./game.scss";
import Mole from "../mole/mole";
import Results from "../results/results";

export default function Game(props) {
  const [key, setKey] = React.useState(null);
  const { counter, counterHit, setCounterHit, setCounter } = props;

  useRandomInterval(() => {
    setKey(Math.floor(Math.random() * 3));
  });

  useEffect(() => {
    let newCounter = counter + 1;
    setCounter(newCounter);
  }, [key]);

  return (
    <div className="game-wrapper">
      <div className={"moles-wrapper"}>
        <div className={"mole-hole-group" + (key === 0 ? " display" : "")}>
          <Mole counterHit={counterHit} setCounterHit={setCounterHit} />
          <div className="hole" />
        </div>
        <div className={"mole-hole-group" + (key === 1 ? " display" : "")}>
          <Mole counterHit={counterHit} setCounterHit={setCounterHit} />
          <div className="hole" />
        </div>
        <div className={"mole-hole-group" + (key === 2 ? " display" : "")}>
          <Mole counterHit={counterHit} setCounterHit={setCounterHit} />
          <div className="hole" />
        </div>
      </div>
      <Results counterHit={counterHit} counter={counter} title={true} />
    </div>
  );
}

const useRandomInterval = (callback) => {
  const random = Math.floor(Math.random() * (700 - 400)) + 400;
  const timeoutId = React.useRef(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    const handleTick = () => {
      timeoutId.current = window.setTimeout(() => {
        savedCallback.current();
        handleTick();
      }, random);
    };

    handleTick();

    return () => window.clearTimeout(timeoutId.current);
  }, []);

  function cancel() {
    window.clearTimeout(timeoutId.current);
  }
  return cancel;
};
