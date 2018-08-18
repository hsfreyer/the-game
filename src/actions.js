import { createAction } from 'redux-actions'

const Actions = {
  ROLL_DICE: 'ROLL_DICE'
}

export default Actions

export const rollDice = createAction(Actions.ROLL_DICE)
