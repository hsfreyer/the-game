import { createAction } from 'redux-actions'

const Actions = {
  ROLL_DICE: 'ROLL_DICE',
  MOVE_PAWN: 'MOVE_PAWN'
}

export default Actions

export const rollDice = createAction(Actions.ROLL_DICE)
export const movePawn = createAction(Actions.MOVE_PAWN)
