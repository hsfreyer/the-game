import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import StartScreen from './components/StartScreen'
import CharacterScreenView from './containers/CharacterScreenView'
import GameView from './containers/GameScreenView'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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

export default App
