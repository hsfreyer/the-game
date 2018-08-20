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
    default:
      return state
  }
}
