import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import StartScreen from './components/StartScreen'
import CharacterScreen from './components/CharacterScreen'
import GameView from './containers/GameScreenView'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={StartScreen} />
            <Route path="/characters" component={CharacterScreen} />
            <Route path="/game" component={GameView} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
