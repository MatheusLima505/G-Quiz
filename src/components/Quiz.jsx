import { useEffect, useState } from "react";
import perguntasImport from "./../assets/questions.json";

function Quiz({handleGameover, pontos, setPontos}) {
  const [thisQuestion, setThisQuestion] = useState(null);
  const [Blacklist, setBlacklist] = useState([])
  const [perguntas, setPerguntas] = useState(perguntasImport)

  function handleResposta(alt) {
    if (alt == true) {
      const QuestionIndex = Math.floor(Math.random() * perguntas.length);
      const perguntaSelecionada = perguntas[QuestionIndex]
      setThisQuestion(perguntaSelecionada);
      setPerguntas(perguntas.filter(item => item.id !== perguntaSelecionada.id))
      console.log(perguntas,"handleResposta")
      setPontos(pontos+1)
    }
    if (alt == false) {
      handleGameover()
    }
  }

  useEffect(() => {
    const QuestionIndex = Math.floor(Math.random() * perguntas.length);
    const perguntaSelecionada = perguntas[QuestionIndex]
    setThisQuestion(perguntaSelecionada);
    setPerguntas(perguntas.filter(item => item.id !== perguntaSelecionada.id))
    console.log(perguntas,"useEffect")
  }, []);

  if (!thisQuestion) return <p>Carregando pergunta...</p>;

  return (
    <>
      <h1>quiz time</h1>
      <h3>{pontos}</h3>
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
