import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/Main.jsx'
import Quiz from './components/Quiz.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [fase, setFase] = useState("Start")

  function handleStart(){
    setFase("Quiz")
  }
  return (
    <>
    {fase==="Start" ? <Start handleStart={handleStart}></Start> : fase ==="Quiz" ? <Quiz></Quiz> : null}
    </>
  )
}

export default App
