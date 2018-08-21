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
    case Actions.UPDATE_COUNT:
      console.log(action.payload)
      setTimeout(500)
      return {
        ...state,
        countDown: {
          ...state.countDown,
          image: action.payload
        }
      }
    case Actions.MOVE_PAWN:
      return {
        ...state
      }
    default:
      return state
  }
}
