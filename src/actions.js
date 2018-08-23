import { createAction } from 'redux-actions'

const Actions = {
  ROLL_DICE: 'ROLL_DICE',
  MOVE_PAWN: 'MOVE_PAWN',
  UPDATE_COUNT: 'UPDATE_COUNT',
  CHOOSE_CHARACTER: 'CHOOSE_CHARACTER',
}

export default Actions

export const rollDice = createAction(Actions.ROLL_DICE)
export const movePawn = createAction(Actions.MOVE_PAWN)
export const updateCount = createAction(Actions.UPDATE_COUNT)
export const chooseCharacter = createAction(Actions.CHOOSE_CHARACTER)
