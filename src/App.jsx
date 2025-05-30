import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/Main'

function App() {
  const [count, setCount] = useState(0)
  const [fase, setFase] = useState("Start")

  function handleStart(){

  }
  return (
    <>
    {fase=="Start" && <Start handleStart={handleStart}></Start>}
    </>
  )
}

export default App
