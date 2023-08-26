// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachObjectProp, textOnInputProp} = props
  const {suggestion, id} = eachObjectProp

  const arrowClicked = () => {
    console.log('arrowClicked event is triggered')
    textOnInputProp(id)
  }

  return (
    <li className="listItems">
      <div>
        <p>{suggestion}</p>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowLogoImg"
        onClick={arrowClicked}
      />
    </li>
  )
}

export default SuggestionItem
