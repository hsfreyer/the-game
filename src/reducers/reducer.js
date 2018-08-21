import Actions from '../actions'
//import _ from 'lodash'
import { singleDice } from '../utils'

export default (state, action) => {
  switch (action.type) {
    case Actions.ROLL_DICE:
      const roll = singleDice()
      return {
        ...state,
        dice: {
          ...state.dice,
          active: state.dice.result[roll]
        }
      }
    case Actions.COUNT_DOWN:
      console.log(action.payload)
      return {
        ...state,
        countDown: {
          ...state.countDown,
          image: action.payload
        }
      }

    default:
      return state
  }
}
