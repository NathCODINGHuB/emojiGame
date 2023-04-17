import './index.css'

const NavBar = props => {
  const {status, score, topScore} = props
  const ScoreDetails = () => {
    if (status === 'homepage') {
      return (
        <>
          <p className="Score">Score: {score}</p>
          <p className="TopScore">Top Score: {topScore}</p>
        </>
      )
    }
    return ''
  }
  return (
    <nav className="navbar">
      <img
        alt="emoji logo"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
      />
      <h1 className="navHeading">Emoji Game</h1>
      {ScoreDetails()}
    </nav>
  )
}
export default NavBar
