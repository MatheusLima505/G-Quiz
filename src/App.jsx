import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/Main.jsx'
import Quiz from './components/Quiz.jsx'
import GameOver from './components/GameOver.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [fase, setFase] = useState("Start")

  function handleStart(){
    setFase("Quiz")
  }
  function handleRetry(){
    console.log('chaves')
    setFase("Start")
  }
  function handleGameover(){
    setFase("GameOver")
  }
  return (
    <>
    {fase==="Start" ? <Start handleStart={handleStart}></Start> : fase ==="Quiz" ? <Quiz handleGameover={handleGameover}></Quiz> : fase ==="GameOver" ? <GameOver handleRetry={handleRetry}></GameOver> : null}
    </>
  )
}

export default App
