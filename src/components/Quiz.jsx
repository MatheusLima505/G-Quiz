import { useEffect, useState } from "react";
import perguntasImport from "./../assets/questions.json";
import Countdown from "./Countdown";
import styles from "./Quiz.module.css"

function Quiz({ handleGameover, pontos, setPontos }) {
  const [thisQuestion, setThisQuestion] = useState(null);
  const [Blacklist, setBlacklist] = useState([]);
  const [perguntas, setPerguntas] = useState(perguntasImport);
  const [resetCountdown, setResetCountdown] = useState(false);

  function handleResposta(alt) {
    if (alt == true) {
      const QuestionIndex = Math.floor(Math.random() * perguntas.length);
      const perguntaSelecionada = perguntas[QuestionIndex];
      setThisQuestion(perguntaSelecionada);
      setPerguntas(
        perguntas.filter((item) => item.id !== perguntaSelecionada.id)
      );
      console.log(perguntas, "handleResposta");
      setPontos(pontos + 1);
      handleReset()
    }
    if (alt == false) {
      handleGameover();
    }
  }

  function handleTimeout() {
    handleGameover();
  }
  
  function handleReset() {
    if (resetCountdown == false){
      setResetCountdown(true)
    } else {
      setResetCountdown(false)
    }
    
  }
  useEffect(() => {
    const QuestionIndex = Math.floor(Math.random() * perguntas.length);
    const perguntaSelecionada = perguntas[QuestionIndex];
    setThisQuestion(perguntaSelecionada);
    setPerguntas(
      perguntas.filter((item) => item.id !== perguntaSelecionada.id)
    );
    console.log(perguntas, "useEffect");
  }, []);

  if (!thisQuestion) return <p>Carregando pergunta...</p>;

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>quiz time</h1>
      <Countdown
        className={styles.countdown}
        initialSeconds={20}
        start={true}
        onComplete={handleTimeout}
        reset={resetCountdown}
      ></Countdown>
      <h3 className={styles.pontos}>Pontos: {pontos}</h3>
      <div className={styles.questionCont}>
      <div className={styles.question}>
        <h2>{thisQuestion.pergunta}</h2>
      </div>
      <div className={styles.answers}>
        <button
          className="item"
          onClick={() => handleResposta(thisQuestion.alternativas[0].correta)}
        >
          {thisQuestion.alternativas[0].texto}
        </button>
        <button
          className="item"
          onClick={() => handleResposta(thisQuestion.alternativas[1].correta)}
        >
          {thisQuestion.alternativas[1].texto}
        </button>
        <button
          className="item"
          onClick={() => handleResposta(thisQuestion.alternativas[2].correta)}
        >
          {thisQuestion.alternativas[2].texto}
        </button>
        <button
          className="item"
          onClick={() => handleResposta(thisQuestion.alternativas[3].correta)}
        >
          {thisQuestion.alternativas[3].texto}
        </button>
      </div>
      </div>
    </div>
  );
}

export default Quiz;
