import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    status: 'homepage',

    clickedEmojiId: undefined,
    score: 0,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  EmojiClicked = id => {
    const {clickedEmojiId, score, topScore} = this.state

    if (clickedEmojiId === undefined) {
      this.setState({clickedEmojiId: id, score: 1})
    } else if (clickedEmojiId === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      if (score === 12) {
        this.setState({status: 'won', topScore: 12})
      }
    } else if (clickedEmojiId !== id) {
      if (score > topScore) {
        this.setState({status: 'lose', topScore: score})
      } else {
        this.setState({status: 'lose'})
      }
    }

    this.shuffledEmojisList()
  }

  playAgain = () => {
    this.setState({status: 'homepage', clickedEmojiId: undefined, score: 0})
    console.log('jai')
  }

  conditionalRender = (status, emojisList, score) => {
    if (status === 'homepage') {
      return this.gamePage(emojisList)
    }
    return this.ResultPage(status, score)
  }

  gamePage = emojisList => (
    <ul className="unorderList">
      {emojisList.map(each => (
        <EmojiCard EmojiClicked={this.EmojiClicked} data={each} key={each.id} />
      ))}
    </ul>
  )

  ResultPage = (status, score) => (
    <WinOrLoseCard playAgain={this.playAgain} score={score} status={status} />
  )

  render() {
    const {status, clickedEmojiId, score, topScore} = this.state
    const {emojisList} = this.props
    console.log(clickedEmojiId)
    return (
      <div className="MainBody">
        <NavBar topScore={topScore} score={score} status={status} />
        <div className="body">
          {this.conditionalRender(status, emojisList, score)}
        </div>
      </div>
    )
  }
}
export default EmojiGame
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
