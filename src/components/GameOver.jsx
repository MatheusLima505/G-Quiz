

export default function GameOver({pontos , handleRetry}) {
    return (<>Você perdeu, que pena...
        <p>Você fez <strong>{pontos}</strong> pontos!</p>
        <button onClick={handleRetry}>Tentar novamente</button>
    </>)
}