import React, { useEffect, useState } from "react";
import "./globals.scss";
import Mountains from "./components/mountains/mountains";
import Actions from "./components/actions/actions";
import Game from "./components/game/game";

function App() {
  const [gameStatus, setGameStatus] = useState("start");
  const [counterHit, setCounterHit] = React.useState(0);
  const [counter, setCounter] = React.useState(-1);

  useEffect(() => {
    let timer;
    window.addEventListener("mousemove", cursorEvent);
    function cursorEvent(e) {
      let cursor = document.getElementById("cursor");
      cursor.style.top = e.pageY - 25 + "px";
      cursor.style.left = e.pageX - 25 + "px";
    }
    window.addEventListener("mousedown", cursorDown);
    function cursorDown() {
      let cursor = document.getElementById("cursor");
      cursor.style.transform = "rotate(-45deg)";
    }

    window.addEventListener("mouseup", cursorUp);
    function cursorUp() {
      let cursor = document.getElementById("cursor");
      cursor.style.transform = "rotate(0)";
    }
    // if (gameStatus === "started") {
    //   timer = setTimeout(() => {
    //     setGameStatus("ended");
    //   }, 15000);
    //   return () => clearTimeout(timer);
    // }
  }, [gameStatus]);

  return (
    <React.Fragment>
      {(gameStatus === "start" || gameStatus === "ended") && (
        <Actions
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          counter={counter}
          setCounter={setCounter}
          counterHit={counterHit}
          setCounterHit={setCounterHit}
        />
      )}
      <div id={"cursor"} />
      <Mountains />
      {gameStatus === "started" && (
        <Game
          counter={counter}
          setCounter={setCounter}
          counterHit={counterHit}
          setCounterHit={setCounterHit}
        />
      )}

    </React.Fragment>
  );
}

export default App;
