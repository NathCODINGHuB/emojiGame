import './index.css'

const EmojiCard = props => {
  const {data, EmojiClicked} = props
  const {emojiName, emojiUrl, id} = data
  const ButtonClicked = () => {
    EmojiClicked(id)
  }
  return (
    <li className="listItem">
      <button onClick={ButtonClicked} className="bn" type="button">
        <img className="listEmoji" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard
