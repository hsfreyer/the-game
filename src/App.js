import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { useLocalStorage } from './middleware'

import StartScreen from './components/StartScreen'
import CharacterScreenView from './containers/CharacterScreenView'
import GameView from './containers/GameScreenView'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  getInitialState(),
  composeEnhancers(applyMiddleware(useLocalStorage))
)

class App extends Component {
  componentDidUpdate() {
    this.ScrollDown()
  }

  ScrollDown = () => {
    setTimeout(function() {
      window.scrollTo(0, 1)
    }, 100)
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={StartScreen} />
            <Route path={'/characters'} component={CharacterScreenView} />
            <Route path={'/game'} component={GameView} />
            <Route component={StartScreen} />
          </Switch>
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
