// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  textOnInput = idNum => {
    console.log(idNum)
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchInputArrayOfObject = suggestionsList.filter(
      eachObjectInput => eachObjectInput.id === idNum,
    )

    console.log(searchInput)
    console.log(searchInputArrayOfObject) // array of object
    const suggestionTextResult = searchInputArrayOfObject[0].suggestion

    this.setState({searchInput: suggestionTextResult})
  }

  render() {
    const {suggestionsList} = this.props
    console.log(suggestionsList)

    const {searchInput} = this.state

    const searchResultsArray = suggestionsList.filter(eachObjectFilter =>
      eachObjectFilter.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogoImg"
        />
        <div className="searchContainer">
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIconLogoImg"
            />
            <input
              type="search"
              value={searchInput}
              placeholder="Search Google"
              className="inputEl"
              onChange={this.searchFunction}
            />
          </div>
          <ul className="ulContainer">
            {searchResultsArray.map(eachObject => (
              <SuggestionItem
                eachObjectProp={eachObject}
                textOnInputProp={this.textOnInput}
                key={eachObject.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
