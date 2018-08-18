import Actions from '../actions'
import _ from 'lodash'

export default (state, action) => {
  switch (action.type) {
    case Actions.ROLL_DICE:
      return state
    default:
      return state
  }
}
