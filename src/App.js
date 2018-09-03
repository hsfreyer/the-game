import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

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

export default App
