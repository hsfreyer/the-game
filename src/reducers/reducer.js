import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.ROLL_DICE:
      const roll = action.payload
      return {
        ...state,
        dice: {
          ...state.dice,
          active: state.dice.result[roll]
        },
        player: {
          ...state.player,
          roll: roll
        }
      }
    case Actions.UPDATE_COUNT:
      return {
        ...state,
        countDown: {
          ...state.countDown,
          image: action.payload
        }
      }
    case Actions.MOVE_PAWN:
      if (state.player.tile === null) {
        return {
          ...state,
          player: {
            ...state.player,
            position: state.tiles[0].position,
            tile: 1
          }
        }
      } else if (state.player.tile >= state.tiles.length) {
        return state
      } else {
        return {
          ...state,
          player: {
            ...state.player,
            position: state.tiles[state.player.tile].position,
            tile: state.player.tile + 1
          }
        }
      }

    case Actions.CHOOSE_CHARACTER:
      return {
        ...state,
        player: {
          ...state.player,
          band: state.bands[action.payload]
        },

        selectedCharacter: state.bands[action.payload].name
      }
    case Actions.RESET_CHARACTERSCREEN:
      return {
        ...state,
        player: {
          tile: null,
          position: { x: 11, y: 11 },
          band: null,
          roll: null
        },
        selectedCharacter: null
      }
    case Actions.TOGGLE_CLICK_BLOCK:
      return {
        ...state,
        isClickBlocked: !state.isClickBlocked
      }
    default:
      return state
  }
}
