import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Start from "./components/Start.jsx";
import Quiz from "./components/Quiz.jsx";
import GameOver from "./components/GameOver.jsx";
import Congrat from "./components/Congrat.jsx";
import Unlimited from "./components/Unlimited.jsx";

function App() {
  const [fase, setFase] = useState("Start");
  const [pontos, setPontos] = useState(0);

  function handleStart() {
    setFase("Quiz");
  }
  function handleRetry() {
    setPontos(0);
    setFase("Start");
  }
  function handleGameover() {
    setFase("GameOver");
  }

  function handleUnlimited() {
    setFase("Unlimited");
  }

  //Quando ganhar:
  useEffect(() => {
    if (pontos >= 20 && fase === "Quiz") {
      setFase("Congrat");
    }
  }, [pontos, fase]);

  return (
    <div className="game">
      {fase === "Start" ? (
        <Start
          handleStart={handleStart}
          handleUnlimited={handleUnlimited}
        ></Start>
      ) : fase === "Quiz" ? (
        <Quiz
          handleGameover={handleGameover}
          pontos={pontos}
          setPontos={setPontos}
        ></Quiz>
      ) : fase === "Unlimited" ? (
        <Unlimited
          handleGameover={handleGameover}
          pontos={pontos}
          setPontos={setPontos}
        ></Unlimited>
      ) : fase === "GameOver" ? (
        <GameOver handleRetry={handleRetry} pontos={pontos}></GameOver>
      ) : fase === "Congrat" ? (
        <Congrat></Congrat>
      ) : null}
    </div>
  );
}

export default App;
