import { createAction } from 'redux-actions'

const Actions = {
  ACTIVATE_DICE: 'ACTIVATE_DICE',
  DEACTIVATE_DICE: 'DEACTIVATE_DICE',
  ROLL_DICE: 'ROLL_DICE',
  SET_RESULT_IMAGE: 'SET_RESULT_IMAGE',
  SET_ANIMATION: 'SET_ANIMATION',
  MOVE_PAWN: 'MOVE_PAWN',
  UPDATE_COUNT: 'UPDATE_COUNT',
  CHOOSE_CHARACTER: 'CHOOSE_CHARACTER',
  RESET_CHARACTERSCREEN: 'RESET_CHARACTERSCREEN',
  SET_CLICK_BLOCK: 'SET_CLICK_BLOCK',
  SET_IS_EVENT: 'SET_IS_EVENT',
  SET_NEW_POSITION: 'SET_NEW_POSITION'
}

export default Actions

export const deactivateDice = createAction(Actions.DEACTIVATE_DICE)
export const activateDice = createAction(Actions.ACTIVATE_DICE)
export const rollDice = createAction(Actions.ROLL_DICE)
export const setResultImage = createAction(Actions.SET_RESULT_IMAGE)
export const setAnimation = createAction(Actions.SET_ANIMATION)
export const movePawn = createAction(Actions.MOVE_PAWN)
export const updateCount = createAction(Actions.UPDATE_COUNT)
export const chooseCharacter = createAction(Actions.CHOOSE_CHARACTER)
export const resetCharacterScreen = createAction(Actions.RESET_CHARACTERSCREEN)
export const setClickBlock = createAction(Actions.SET_CLICK_BLOCK)
export const setIsEvent = createAction(Actions.SET_IS_EVENT)
export const setNewPosition = createAction(Actions.SET_NEW_POSITION)
