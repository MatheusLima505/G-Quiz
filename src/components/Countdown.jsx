import { useState, useEffect } from "react";

function Countdown({ initialSeconds, start, onComplete, reset }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  

  useEffect(() => {
    if (!start || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [start, seconds]);

  // Opcional: Resetar segundos se `start` mudar de false para true novamente
  useEffect(() => {
    if (start) {
      setSeconds(initialSeconds);
    }
  }, [start, initialSeconds]);

  useEffect(() => {
    if (seconds === 0 && start) {
      if (onComplete) {
        onComplete(); // chama a função passada pelo pai
      }
    }
  }, [seconds, start, onComplete]);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [reset, initialSeconds]);

  return (
    <div>
      <h3>Tempo: {seconds}</h3>
    </div>
  );
}

export default Countdown;
