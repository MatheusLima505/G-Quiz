import { useEffect, useState } from "react";
import perguntas from "./../assets/questions.json";

function Quiz() {
  const [thisQuestion, setThisQuestion] = useState(null);

  useEffect(() => {
    const QuestionIndex = Math.floor(Math.random() * perguntas.length);
    setThisQuestion(perguntas[QuestionIndex]);
  }, []);

  if (!thisQuestion) return <p>Carregando pergunta...</p>;

  return (
    <>
      <h1>quiz time</h1>
      <div className="question"><h2>{thisQuestion.pergunta}</h2></div>
      <div className="answers">
            <button className="item">{thisQuestion.alternativas[0].texto}</button>
            <button className="item">{thisQuestion.alternativas[1].texto}</button>
            <button className="item">{thisQuestion.alternativas[2].texto}</button>
            <button className="item">{thisQuestion.alternativas[3].texto}</button>
      </div>
    </>
  );
}

export default Quiz;
