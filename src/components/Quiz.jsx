import { useEffect, useState } from "react";
import perguntas from "./../assets/questions.json";

function Quiz() {
  const [thisQuestion, setThisQuestion] = useState(null);

  function handleResposta(alt) {
    if (alt == true) {
      const QuestionIndex = Math.floor(Math.random() * perguntas.length);
      setThisQuestion(perguntas[QuestionIndex]);
    }
    if (alt == false) {
        alert("foase")
    }
  }

  useEffect(() => {
    const QuestionIndex = Math.floor(Math.random() * perguntas.length);
    setThisQuestion(perguntas[QuestionIndex]);
  }, []);

  if (!thisQuestion) return <p>Carregando pergunta...</p>;

  return (
    <>
      <h1>quiz time</h1>
      <div className="question">
        <h2>{thisQuestion.pergunta}</h2>
      </div>
      <div className="answers">
        <button
          className="item"
          onClick={() =>handleResposta(thisQuestion.alternativas[0].correta)}
        >
          {thisQuestion.alternativas[0].texto}
        </button>
        <button
          className="item"
          onClick={() =>handleResposta(thisQuestion.alternativas[1].correta)}
        >
          {thisQuestion.alternativas[1].texto}
        </button>
        <button
          className="item"
          onClick={() =>handleResposta(thisQuestion.alternativas[2].correta)}
        >
          {thisQuestion.alternativas[2].texto}
        </button>
        <button
          className="item"
          onClick={() =>handleResposta(thisQuestion.alternativas[3].correta)}
        >
          {thisQuestion.alternativas[3].texto}
        </button>
      </div>
    </>
  );
}

export default Quiz;
