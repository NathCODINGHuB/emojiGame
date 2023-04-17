import './index.css'

const WinOrLoseCard = props => {
  const {status, score, playAgain} = props

  const PlayAgainBnClicked = () => {
    playAgain()
  }
  if (status === 'won') {
    return (
      <div className="reultContainer">
        <div className="resultContentContainer">
          <h1 className="resultTitle">You Won</h1>
          <p className="scoreText">Best Score</p>
          <p className="score">12/12</p>
          <button
            onClick={PlayAgainBnClicked}
            className="resultbn"
            type="button"
          >
            Play Again
          </button>
        </div>
        <img
          className="resultImg"
          alt="win or lose"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        />
      </div>
    )
  }
  return (
    <div className="reultContainer">
      <div className="resultContentContainer">
        <h1 className="resultTitle">You Lose</h1>
        <p className="scoreText">Score</p>
        <p className="score">{score}/12</p>
        <button onClick={PlayAgainBnClicked} className="resultbn" type="button">
          Play Again
        </button>
      </div>
      <img
        className="resultImg"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      />
    </div>
  )
}
export default WinOrLoseCard
