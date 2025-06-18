

export default function GameOver({pontos , handleRetry}) {
    return (<>Você perdeu, que pena...
        <p>Você fez {pontos} pontos!</p>
        <button onClick={handleRetry}>Tentar novamente</button>
    </>)
}