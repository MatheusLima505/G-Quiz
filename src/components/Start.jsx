function Start({ handleStart, handleUnlimited }){
    return(
        <>
        <h1>G-Quiz</h1>
        <p>por Matheus Araujo de Lima</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleUnlimited}>Ilimitado</button>
        </>
    )
}

export default Start;