import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

// Replace your code here
class App extends Component {
  state = {userInput: '', list: []}

  onChangeSearch = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onClickAdd = () => {
    const {userInput} = this.state
    const newItem = {
      id: uuidv4(),
      string: userInput,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      userInput: '',
    }))
  }

  returnResult = () => {
    const {list} = this.state

    return (
      <ul className="result-container">
        {list.map(each => (
          <li key={each.id} className="list-item">
            <p>{each.string}:</p>
            <p>{each.string.length}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {userInput, list} = this.state
    console.log('list', list)
    const isListEmpty = list.length === 0

    return (
      <div className="bg-container">
        <div className="input-characters-count-container">
          <div className="left-container">
            <div className="left-top-container">
              <h1>Count the characters like a Boss...</h1>
            </div>
            {isListEmpty ? (
              <div className="top-bottom-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                  alt="no user inputs"
                  className="no-input-image"
                />
              </div>
            ) : (
              this.returnResult()
            )}
          </div>

          <div className="characters-input-container">
            <h1 className="character-heading">Character Counter</h1>
            <form className="input-container">
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input"
                value={userInput}
                onChange={this.onChangeSearch}
              />
              <button
                type="button"
                className="add-button"
                onClick={this.onClickAdd}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
