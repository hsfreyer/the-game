import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useLocalStorage } from './middleware'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import StartScreen from './components/StartScreen'
import CharacterScreenView from './containers/CharacterScreenView'
import GameView from './containers/GameScreenView'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  getInitialState(),
  composeEnhancers(applyMiddleware(useLocalStorage)),
)

class App extends Component {
  ScrollDown = () => {
    setTimeout(function() {
      window.scrollTo(0, 1)
    }, 100)
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {this.ScrollDown()}
            <Route exact path="/" component={StartScreen} />
            <Route path={'/characters'} component={CharacterScreenView} />
            <Route path={'/game'} component={GameView} />
          </div>
        </Router>
      </Provider>
    )
  }
}

function getInitialState() {
  const savedState = localStorage.getItem('state')
  if (savedState) {
    return JSON.parse(savedState)
  } else {
    return initialState
  }
}

export default App
